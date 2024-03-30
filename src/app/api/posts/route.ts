import { NextResponse, NextRequest } from 'next/server';
import { postService } from './PostService';

export async function GET(_req: NextRequest) {
   try {
      const posts = await postService.getPosts();
      return NextResponse.json(posts);
   } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Failed to create contact' }, { status: 400 });
   }
}
