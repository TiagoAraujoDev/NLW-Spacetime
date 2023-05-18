import { api } from '@/lib/axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const tokenResponse = await api.post('/register', {
    code,
  })

  const { token } = tokenResponse.data

  const redirectUrl = new URL('/', request.url)

  console.log(token)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; path=/;`,
    },
  })
}
