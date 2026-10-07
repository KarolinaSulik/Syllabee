import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { corsHeaders, isAllowedOrigin } from "../_shared/cors.ts";
import { supabaseAdminKey } from "../_shared/supabase-admin.ts";

function isOwnerEmail(email: string | undefined) {
  if (!email) return false;
  const ownerEmails = (Deno.env.get("OWNER_EMAILS") ?? "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  return ownerEmails.includes(email.trim().toLowerCase());
}

Deno.serve(async (request) => {
  const headers = corsHeaders(request);
  if (request.method === "OPTIONS") return new Response(null, { headers });
  if (request.method !== "POST" || !isAllowedOrigin(request)) return new Response("Not found", { status: 404 });

  const authorization = request.headers.get("Authorization");
  if (!authorization?.startsWith("Bearer ")) return Response.json({ error: "Unauthorized" }, { status: 401, headers });

  const url = Deno.env.get("SUPABASE_URL")!;
  const serviceRole = supabaseAdminKey();
  const admin = createClient(url, serviceRole, { auth: { persistSession: false, autoRefreshToken: false } });
  const token = authorization.slice("Bearer ".length);
  const { data: { user }, error: userError } = await admin.auth.getUser(token);
  if (userError || !user) return Response.json({ error: "Unauthorized" }, { status: 401, headers });
  const isOwner = isOwnerEmail(user.email);
  if (isOwner) return Response.json({ signedIn: true, hasFullAccess: true, isOwner: true, email: user.email ?? null }, { headers });

  const { data, error } = await admin
    .from("entitlements")
    .select("access_granted_at")
    .eq("user_id", user.id)
    .maybeSingle();
  if (error) {
    console.error("Could not read Syllabee Plus entitlement", error);
    return Response.json({ error: "Could not check access" }, { status: 500, headers });
  }
  console.log("Account status checked", { userId: user.id, hasFullAccess: Boolean(data) });

  return Response.json({ signedIn: true, hasFullAccess: Boolean(data), isOwner: false, email: user.email ?? null }, { headers });
});
