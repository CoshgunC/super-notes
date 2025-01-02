import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { type CookieOptions, createServerClient } from '@supabase/ssr';

const cookieStore = {
  async get(name: string) {
    const cookieJar = await cookies(); // Await the cookies promise
    return cookieJar.get(name)?.value;
  },
  async set(name: string, value: string, options: CookieOptions) {
    try {
      const cookieJar = await cookies(); // Await the cookies promise
      cookieJar.set(name, value, options);
    } catch (error) {
      throw new Error('Failed to set cookie: ' + error);
    }
  },
  async remove(name: string, options: CookieOptions) {
    try {
      const cookieJar = await cookies(); // Await the cookies promise
      cookieJar.delete(name, options);
    } catch (error) {
      throw new Error('Failed to delete cookie: ' + error);
    }
  }
};

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/dashboard';

  if (code) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: cookieStore
      }
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?message=Could not authenticate`);
}