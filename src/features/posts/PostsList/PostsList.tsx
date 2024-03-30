import { Post } from '@/types/postsTypes';
import { PostCard } from '../PostCard';

interface PostsListProps {
   posts: Post[];
}

export const PostsList: React.FC<PostsListProps> = ({ posts }) => {
   return (
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
         {posts.length > 0 ? (
            posts.map((post) => (
               <PostCard key={post.id} title={post.title} content={post.content} imageUrl={post.imageUrl} />
            ))
         ) : (
            <p className='text-center text-gray-500 col-span-full'>No posts found.</p>
         )}
      </div>
   );
};
