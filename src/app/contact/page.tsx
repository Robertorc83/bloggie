import React from 'react';
import { ContactForm } from './(partials)/ContactForm';

type Props = {};

function page({}: Props) {
   return (
      <div className='container mx-auto p-4 max-w-4xl'>
         <h2 className='text-2xl font-bold mb-4 text-white mt-10'>Contact Us</h2>
         <ContactForm />
      </div>
   );
}

export default page;
