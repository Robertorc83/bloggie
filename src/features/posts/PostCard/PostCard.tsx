'use client';
import { Button } from '@/common/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface PostCardProps {
   title: string;
   content: string;
   imageUrl: string;
   id: number;
}

export const PostCard: React.FC<PostCardProps> = ({ title, content, imageUrl, id }) => {
   const router = useRouter();

   const navigateToPost = () => {
      router.push(`/articles/${id}`);
   };
   return (
      <article className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out my-5'>
         <div className='w-full h-56 relative'>
            <Image src={imageUrl} alt={title} layout='fill' objectFit='cover' />
         </div>
         <div className='flex-grow p-5 flex flex-col justify-between'>
            <div>
               <h2 className='text-2xl font-bold text-blue-500 hover:text-blue-700'>{title}</h2>
               <p className='text-gray-700 mt-3 overflow-hidden text-ellipsis'>{content}</p>
            </div>
            <div className='mt-4 flex justify-center'>
               <Button onClick={navigateToPost}>Read More</Button>
            </div>
         </div>
      </article>
   );
};
