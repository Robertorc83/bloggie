import React, { useState, FormEvent } from 'react';

interface CreatePostFormProps {
   onSubmit: (title: string, content: string, imageUrl: string) => void;
   className?: string;
}

export const CreatePostForm: React.FC<CreatePostFormProps> = ({ onSubmit, className }) => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [keyword, setKeyword] = useState('');

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      const imageUrl = `https://source.unsplash.com/640x640/?${encodeURIComponent(keyword || 'blog')}`;
      onSubmit(title, content, imageUrl);
      setTitle('');
      setContent('');
      setKeyword('');
   };

   return (
      <div
         className={`p-4 md:p-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg ${className}`}>
         <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Title */}
            <div>
               <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
                  Title
               </label>
               <input
                  type='text'
                  id='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md'
                  required
               />
            </div>

            {/* Content */}
            <div>
               <label htmlFor='content' className='block text-sm font-medium text-gray-700'>
                  Content
               </label>
               <textarea
                  id='content'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  className='mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md'
                  required></textarea>
            </div>

            {/* Keyword */}
            <div>
               <label htmlFor='keyword' className='block text-sm font-medium text-gray-700'>
                  Keyword (for related image)
               </label>
               <input
                  type='text'
                  id='keyword'
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className='mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md'
                  placeholder='Optional'
               />
            </div>

            {/* Submit Button */}
            <button
               type='submit'
               className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
               Create Post
            </button>
         </form>
      </div>
   );
};
