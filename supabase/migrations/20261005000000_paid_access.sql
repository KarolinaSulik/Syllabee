-- Uprawnienie jest nadawane wyłącznie przez webhook Stripe uruchomiony
-- z kluczem service_role. Klient przeglądarkowy nie ma dostępu do tych tabel.
create table if not exists public.entitlements (
  user_id uuid primary key references auth.users(id) on delete cascade,
  access_granted_at timestamptz not null default now(),
  source text not null default 'stripe' check (source in ('stripe', 'manual'))
);

create table if not exists public.payments (
  stripe_event_id text primary key,
  stripe_checkout_session_id text not null unique,
  stripe_payment_intent_id text,
  user_id uuid not null references auth.users(id) on delete restrict,
  amount_total integer,
  currency text,
  created_at timestamptz not null default now()
);

alter table public.entitlements enable row level security;
alter table public.payments enable row level security;

-- Nawet zalogowany rodzic nie odczyta tabel bezpośrednio. Status dostępu
-- zwraca wyłącznie funkcja account-status po sprawdzeniu jego tokenu.
revoke all on table public.entitlements from anon, authenticated;
revoke all on table public.payments from anon, authenticated;
