import { redirect } from '@sveltejs/kit'

export function load ({ cookies }) {
  const session = cookies.get('admin_session')

  if (!session) {
    redirect(303, '/admin/login')
  }
}