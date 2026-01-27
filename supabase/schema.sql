-- Create a table for storing dream analysis results
create table public.dreams (
  id uuid not null default gen_random_uuid (),
  user_id uuid default auth.uid (),
  content text not null,
  diagnosis_result jsonb not null,
  created_at timestamp with time zone not null default now(),
  constraint dreams_pkey primary key (id),
  constraint dreams_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade
);

-- Set up Row Level Security (RLS)
alter table public.dreams enable row level security;

-- Policy to allow anyone to insert dreams (to enable sharing for guest users)
create policy "Anyone can insert dreams" on public.dreams
  for insert
  with check (true);

-- Policy to allow users to view their own dreams
create policy "Users can view their own dreams" on public.dreams
  for select
  using (auth.uid() = user_id);

-- Policy to allow public to view any dream by ID (for sharing)
create policy "Anyone can view any dream by id" on public.dreams
  for select
  using (true);

