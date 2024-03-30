import { Post, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class PostRepository {
   async findAll() {
      return await prisma.post.findMany({
         orderBy: {
            createdAt: 'desc',
         },
      });
   }

   async findById(id: number) {
      return await prisma.post.findUnique({
         where: { id },
      });
   }

   async create(postData: { title: string; content: string; imageUrl: string }): Promise<Post> {
      return prisma.post.create({
         data: postData,
      });
   }
}

export const postRepository = new PostRepository();
