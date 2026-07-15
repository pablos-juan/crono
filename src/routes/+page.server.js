export function load ({ cookies }) {
  const isadmin = !!cookies.get('admin_session')

  return { isadmin }
}