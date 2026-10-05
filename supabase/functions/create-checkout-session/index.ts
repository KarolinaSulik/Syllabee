import Stripe from "npm:stripe@17.7.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { corsHeaders, isAllowedOrigin } from "../_shared/cors.ts";

Deno.serve(async (request) => {
  const headers = corsHeaders(request);
  if (request.method === "OPTIONS") return new Response(null, { headers });
  if (request.method !== "POST" || !isAllowedOrigin(request)) return new Response("Not found", { status: 404 });

  const authorization = request.headers.get("Authorization");
  if (!authorization?.startsWith("Bearer ")) return Response.json({ error: "Unauthorized" }, { status: 401, headers });

  const url = Deno.env.get("SUPABASE_URL")!;
  const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const admin = createClient(url, serviceRole, { auth: { persistSession: false, autoRefreshToken: false } });
  const token = authorization.slice("Bearer ".length);
  const { data: { user }, error: userError } = await admin.auth.getUser(token);
  if (userError || !user?.email) return Response.json({ error: "Unauthorized" }, { status: 401, headers });

  const { data: entitlement } = await admin.from("entitlements").select("user_id").eq("user_id", user.id).maybeSingle();
  if (entitlement) return Response.json({ error: "Already unlocked" }, { status: 409, headers });

  const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, { httpClient: Stripe.createFetchHttpClient() });
  const siteUrl = Deno.env.get("ALLOWED_ORIGIN")!;
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    customer_email: user.email,
    client_reference_id: user.id,
    metadata: { user_id: user.id, product: "syllabee-full-access" },
    line_items: [{ price: Deno.env.get("STRIPE_FULL_ACCESS_PRICE_ID")!, quantity: 1 }],
    success_url: `${siteUrl}/?gra=czytanie&payment=success`,
    cancel_url: `${siteUrl}/?gra=czytanie&payment=cancelled`,
  });

  return Response.json({ checkoutUrl: session.url }, { headers });
});
