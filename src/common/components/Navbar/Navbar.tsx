import Link from 'next/link';

const NavBar = () => {
   return (
      <nav className='bg-blue-900 bg-opacity-80 text-white py-4 shadow-md'>
         <div className='max-w-6xl mx-auto px-4'>
            <div className='flex justify-between items-center'>
               <Link href='/' className='font-bold text-xl'>
                  Bloggie
               </Link>
               <div className='flex space-x-4'>
                  <Link href='/' className='hover:bg-blue-700 py-2 px-3 rounded-lg'>
                     Home
                  </Link>
                  <Link href='/contact' className='hover:bg-blue-700 py-2 px-3 rounded-lg'>
                     Contact
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
