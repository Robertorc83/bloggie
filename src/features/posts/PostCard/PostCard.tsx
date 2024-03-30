import Image from 'next/image';

interface PostCardProps {
   title: string;
   content: string;
   imageUrl: string;
}

export const PostCard: React.FC<PostCardProps> = ({ title, content, imageUrl }) => {
   return (
      <article className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out my-5'>
         <div className='w-full h-56 relative'>
            <Image src={imageUrl} alt={title} layout='fill' objectFit='cover' />
         </div>
         <div className='p-5'>
            <h2 className='text-2xl font-bold text-blue-500 hover:text-blue-700'>{title}</h2>
            <p className='text-gray-700 mt-3'>{content}</p>
         </div>
      </article>
   );
};
