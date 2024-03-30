import { NextResponse, NextRequest } from 'next/server';
import { postService } from './PostService';

export async function GET() {
   try {
      const posts = await postService.getPosts();
      return NextResponse.json(posts);
   } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Failed to create contact' }, { status: 400 });
   }
}

export async function POST(req: NextRequest) {
   try {
      const body = await req.json();
      const { title, content, imageUrl } = body;

      const newPost = await postService.createPost({ title, content, imageUrl });
      return NextResponse.json(newPost);
   } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Failed to create post' }, { status: 400 });
   }
}
