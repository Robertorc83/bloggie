'use client';
import React, { useState, useEffect } from 'react';
import { CreatePostForm } from '@/features/posts/CreatePostForm';
import { PostsList } from '@/features/posts/PostsList';
import { Post } from '@/types/postsTypes';

// Mock function to simulate post creation
const mockCreatePost = (title: string, content: string, imageUrl: string) => {
   console.log({ title, content, imageUrl });
};

type Props = {};

const ArticlesClient: React.FC<Props> = () => {
   const [posts, setPosts] = useState<Post[]>([]);
   const [showForm, setShowForm] = useState(false);

   const toggleForm = () => setShowForm(!showForm);

   useEffect(() => {
      // Function to fetch posts
      const fetchPosts = async () => {
         try {
            const response = await fetch('/api/posts');
            if (!response.ok) {
               throw new Error('Failed to fetch posts');
            }
            const data: Post[] = await response.json();
            setPosts(data);
         } catch (error) {
            console.error('Error fetching posts:', error);
            // Handle error (e.g., show notification, log to monitoring service, etc.)
         }
      };

      fetchPosts();
   }, []);

   return (
      <div className='max-w-4xl mx-auto p-4'>
         <button
            onClick={toggleForm}
            className='mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            {showForm ? 'Hide Form' : 'Create New Post'}
         </button>

         {showForm && <CreatePostForm onSubmit={mockCreatePost} className='my-5' />}

         <PostsList posts={posts} />
      </div>
   );
};

export default ArticlesClient;
