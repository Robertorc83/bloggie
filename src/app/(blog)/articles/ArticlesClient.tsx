'use client';
import React, { useState, useEffect } from 'react';
import { CreatePostForm } from '@/features/posts/CreatePostForm';
import { PostsList } from '@/features/posts/PostsList';
import { Post } from '@/types/postsTypes';

type Props = {};

const ArticlesClient: React.FC<Props> = () => {
   const [posts, setPosts] = useState<Post[]>([]);
   const [showForm, setShowForm] = useState(false);

   const toggleForm = () => setShowForm(!showForm);

   const createPost = async (title: string, content: string, imageUrl: string) => {
      try {
         const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, imageUrl }),
         });

         if (!response.ok) {
            throw new Error('Failed to create post');
         }

         const newPost: Post = await response.json();
         setPosts((currentPosts) => [newPost, ...currentPosts]);
      } catch (error) {
         console.error('Error creating post:', error);
      }
   };

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

         {showForm && <CreatePostForm onSubmit={createPost} className='my-5' />}

         <PostsList posts={posts} />
      </div>
   );
};

export default ArticlesClient;
