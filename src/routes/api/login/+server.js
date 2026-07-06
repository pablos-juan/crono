import { json } from '@sveltejs/kit'
import { ADMIN_CODE } from '$env/static/private'

export async function POST ({ request, cookies }) {
  const { code } = await request.json()

  console.log('código ingresado:', code)
  console.log('código esperado:', ADMIN_CODE)

  if (code !== ADMIN_CODE) {
    return json({ error: 'Código incorrecto' }, { status: 401 })
  }

  cookies.set('admin_session', 'true', {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 365 * 10
  })

  return json({ ok: true })
}