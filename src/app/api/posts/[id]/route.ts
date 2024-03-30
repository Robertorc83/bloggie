import { NextResponse, NextRequest } from 'next/server';
import { postService } from '../PostService';

export async function GET(req: NextRequest) {
   const postIdStr = req.nextUrl.pathname.split('/').pop(); // This is a string or undefined

   // First, check if postIdStr is not undefined and then attempt to convert it to a number
   let postId = postIdStr ? Number(postIdStr) : NaN;

   // Check if postId is a valid number
   if (isNaN(postId)) {
      console.error('Invalid post ID:', postId);
      return (
         NextResponse.json({ error: 'Invalid post ID' }),
         { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
   }
   try {
      const post = await postService.getPostById(postId);
      if (post) {
         return NextResponse.json(post);
      } else {
         return NextResponse.json({ error: 'Post not found' }, { status: 400 });
      }
   } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Failed to fetch the post' }, { status: 500 });
   }
}
