'use client';
import { useState } from 'react';

interface ContactFormProps {
   className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
         const response = await fetch('/api/contacts', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, message }),
         });

         if (!response.ok) {
            throw new Error('Failed to submit contact form');
         }

         alert('Contact form submitted successfully!');
         // Reset form fields
         setName('');
         setEmail('');
         setPhone('');
         setMessage('');
      } catch (error) {
         console.error('Error submitting contact form:', error);
         alert('Error submitting contact form');
      }
   };

   return (
      <div
         className={`p-4 mt-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg ${className}`}>
         <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Name */}
            <div>
               <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                  Name
               </label>
               <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md'
                  required
               />
            </div>

            {/* Email */}
            <div>
               <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                  Email
               </label>
               <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md'
                  required
               />
            </div>

            {/* Phone */}
            <div>
               <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                  Phone (Optional)
               </label>
               <input
                  type='tel'
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md'
               />
            </div>

            {/* Message */}
            <div>
               <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                  Message
               </label>
               <textarea
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className='mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md'
                  required></textarea>
            </div>

            {/* Submit Button */}
            <div className='flex justify-center'>
               <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
};
