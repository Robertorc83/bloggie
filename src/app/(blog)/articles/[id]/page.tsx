import { redirect } from 'next/navigation';
import { PostClient } from './PostClient';
import type { Post } from '@prisma/client';

const Post = async ({ params }: { params: { id: string } }) => {
   console.log('params', params);
   const postData = await fetchPost(params?.id);
   if (!postData) return redirect('/');

   return <PostClient postData={postData as unknown as Post} />;
};

export default Post;

const fetchPost = async (postId: string) => {
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;

   try {
      const response = await fetch(`${apiUrl}/api/posts/${postId}`);

      if (response.ok) {
         return response.json();
      }

      return [];
   } catch (error) {
      console.error('Error fetching unique post:', error);
   }
};
