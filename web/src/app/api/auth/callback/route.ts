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

  const tokenExpiresInSeconds = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; path=/; max-age=${tokenExpiresInSeconds};`,
    },
  })
}
