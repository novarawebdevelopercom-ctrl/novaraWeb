import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { defineRouting } from 'next-intl/routing';

const routing = defineRouting({
  locales: ['en'],
  defaultLocale: 'en',
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/dashboard')) {
    const response = NextResponse.next();

    const locale = request.cookies.get('NEXT_LOCALE')?.value || routing.defaultLocale;

    response.cookies.set('NEXT_LOCALE', locale);

    return response;
  }

  const handleI18nRouting = createMiddleware(routing);
  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Skip static files, _next, and APIs
};
