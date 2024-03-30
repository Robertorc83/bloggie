import { Post } from '@/types/postsTypes';

interface PostsListProps {
   posts: Post[];
}

export const PostsList = ({ posts }: PostsListProps) => {
   return (
      <div>
         {posts.length > 0 ? (
            posts.map((post) => (
               <article key={post.id} className='mb-4 p-4 border border-gray-200 rounded'>
                  <h2 className='text-lg font-bold'>{post.title}</h2>
                  <p className='text-gray-700'>{post.content}</p>
               </article>
            ))
         ) : (
            <p>No posts found.</p>
         )}
      </div>
   );
};
