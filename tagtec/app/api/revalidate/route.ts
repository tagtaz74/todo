import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const endpoint = body?.api as string | undefined;

  if (endpoint === 'tags') {
    revalidateTag('tags');
  } else {
    revalidateTag('blog');
  }

  return NextResponse.json({ revalidated: true });
};
