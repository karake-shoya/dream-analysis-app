-- Create a table for storing dream analysis results
create table public.dreams (
  id uuid not null default gen_random_uuid (),
  user_id uuid not null default auth.uid (),
  content text not null,
  diagnosis_result jsonb not null,
  created_at timestamp with time zone not null default now(),
  constraint dreams_pkey primary key (id),
  constraint dreams_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade
);

-- Set up Row Level Security (RLS)
alter table public.dreams enable row level security;

-- Policy to allow users to insert their own dreams
create policy "Users can insert their own dreams" on public.dreams
  for insert
  with check (auth.uid() = user_id);

-- Policy to allow users to view their own dreams
create policy "Users can view their own dreams" on public.dreams
  for select
  using (auth.uid() = user_id);

-- Policy to allow users to delete their own dreams (optional, but good practice)
create policy "Users can delete their own dreams" on public.dreams
  for delete
  using (auth.uid() = user_id);
