import Stripe from "npm:stripe@17.7.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { supabaseAdminKey } from "../_shared/supabase-admin.ts";

Deno.serve(async (request) => {
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const signature = request.headers.get("stripe-signature");
  if (!signature) return new Response("Missing signature", { status: 400 });

  const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, { httpClient: Stripe.createFetchHttpClient() });
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(await request.text(), signature, Deno.env.get("STRIPE_WEBHOOK_SECRET")!);
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type !== "checkout.session.completed") return Response.json({ received: true });
  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session.metadata?.user_id ?? session.client_reference_id;
  if (!userId || session.payment_status !== "paid") return Response.json({ received: true });

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, supabaseAdminKey(), { auth: { persistSession: false } });
  const { error: paymentError } = await admin.from("payments").upsert({
    stripe_event_id: event.id,
    stripe_checkout_session_id: session.id,
    stripe_payment_intent_id: typeof session.payment_intent === "string" ? session.payment_intent : null,
    user_id: userId,
    amount_total: session.amount_total,
    currency: session.currency,
  }, { onConflict: "stripe_event_id", ignoreDuplicates: true });
  if (paymentError) return new Response("Could not save payment", { status: 500 });

  const { error: accessError } = await admin.from("entitlements").upsert({ user_id: userId, source: "stripe" }, { onConflict: "user_id", ignoreDuplicates: true });
  if (accessError) return new Response("Could not grant access", { status: 500 });
  return Response.json({ received: true });
});
