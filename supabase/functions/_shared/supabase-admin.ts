/**
 * Supabase currently exposes the server key as a JSON map. Keep the legacy
 * fallback so locally emulated older projects still work as well.
 */
export function supabaseAdminKey() {
  const secretKeys = Deno.env.get("SUPABASE_SECRET_KEYS");
  if (secretKeys) {
    try {
      const defaultKey = JSON.parse(secretKeys).default;
      if (typeof defaultKey === "string" && defaultKey) return defaultKey;
    } catch {
      // Use the legacy variable below when the environment is malformed.
    }
  }

  const legacyKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!legacyKey) throw new Error("Supabase server key is unavailable");
  return legacyKey;
}
