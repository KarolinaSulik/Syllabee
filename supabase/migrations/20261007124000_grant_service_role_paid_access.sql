-- Edge Functions use the server-only service_role key. Browser roles remain
-- blocked by RLS and the explicit revokes in the original migration.
grant select, insert, update on table public.entitlements to service_role;
grant select, insert, update on table public.payments to service_role;
