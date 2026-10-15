// Origin to adres aplikacji w przeglądarce, a nie adres rodzica kupującego
// dostęp. Każda osoba korzystająca z syllabee.online może więc zapłacić.
const allowedOrigin = Deno.env.get("ALLOWED_ORIGIN") ?? "https://syllabee.online";

export function corsHeaders(request: Request) {
  const origin = request.headers.get("origin");
  return {
    "Access-Control-Allow-Origin": origin === allowedOrigin ? origin : allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

export function isAllowedOrigin(request: Request) {
  return request.headers.get("origin") === allowedOrigin;
}
