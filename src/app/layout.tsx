import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/common/components/Navbar/Navbar';
import Footer from '@/common/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'My super blog app',
   description: 'Created by Roberto Espinoza',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <div className='flex flex-col min-h-screen bg-gradient-to-b from-blue-300 via-purple-400 to-purple-600'>
               <NavBar />
               <main className='flex-grow'>{children}</main>
               <Footer />
            </div>
         </body>
      </html>
   );
}
