import { PrismaClient } from '@prisma/client';
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
}

export const postRepository = new PostRepository();