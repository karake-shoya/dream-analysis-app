-- Create a table for storing dream analysis results
create table public.dreams (
  id uuid not null default gen_random_uuid (),
  user_id uuid default auth.uid (),
  content text not null,
  diagnosis_result jsonb not null,
  share_token uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  constraint dreams_pkey primary key (id),
  constraint dreams_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade,
  constraint dreams_share_token_key unique (share_token)
);

create index if not exists dreams_user_id_idx on public.dreams (user_id);
create index if not exists dreams_created_at_idx on public.dreams (created_at desc);

-- Set up Row Level Security (RLS)
alter table public.dreams enable row level security;

-- Ensure policy recreation is idempotent
drop policy if exists "Anyone can insert dreams" on public.dreams;
drop policy if exists "Users can view their own dreams" on public.dreams;
drop policy if exists "Anyone can view any dream by id" on public.dreams;

-- Allow inserts for both authenticated users and guests
create policy "Anyone can insert dreams" on public.dreams
  for insert
  with check (
    (auth.uid() is null and user_id is null)
    or (auth.uid() = user_id)
  );

-- Only owners can directly read rows via anon/authenticated client queries
create policy "Users can view their own dreams" on public.dreams
  for select
  using (auth.uid() = user_id);
