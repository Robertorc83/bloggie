import { Post } from '@prisma/client';
import Image from 'next/image';

interface PostClientProps {
   postData: Post;
}

export const PostClient: React.FC<PostClientProps> = ({ postData }) => {
   const { title, content, imageUrl } = postData;

   return (
      <div className='max-w-4xl mx-auto mt-10'>
         <div className='mb-8'>
            {/* Post Image */}
            <div className='relative w-full h-96 mb-6'>
               <Image src={imageUrl} alt={title} layout='fill' objectFit='cover' className='rounded-lg' />
            </div>
            {/* Post Title */}
            <h1 className='text-4xl font-bold text-blue-500 mb-4'>{title}</h1>
            {/* Post Content */}
            <p className='text-gray-700 text-lg whitespace-pre-line'>{content}</p>
         </div>
      </div>
   );
};
