'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { isAdmin } from '@/lib/admin';

async function getAdminUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !isAdmin(user.email)) {
    throw new Error('Unauthorized');
  }
  return { supabase, user };
}

export async function addUpdate(formData: FormData) {
  const date = formData.get('date') as string;
  const label = formData.get('label') as string;

  if (!date || !label?.trim()) return;
  if (label.trim().length > 200) return;

  const { supabase } = await getAdminUser();

  await supabase.from('site_updates').insert({ date, label: label.trim() });

  revalidatePath('/');
  revalidatePath('/updates');
  revalidatePath('/admin/updates');
}

export async function deleteUpdate(id: string) {
  const { supabase } = await getAdminUser();

  await supabase.from('site_updates').delete().eq('id', id);

  revalidatePath('/');
  revalidatePath('/updates');
  revalidatePath('/admin/updates');
}
