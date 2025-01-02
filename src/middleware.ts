import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import type { NextRequest } from 'next/server';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function middleware(req: NextRequest) {
  const { data: { user } } = await supabase.auth.getUser();

  // Define the protected routes
  const protectedRoutes = ['/dashboard', '/new'];

  // Check if the request is for a protected route
  if (protectedRoutes.includes(req.nextUrl.pathname) && !user) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// Specify the paths to apply the middleware
export const config = {
  matcher: ['/dashboard', '/new'],
};