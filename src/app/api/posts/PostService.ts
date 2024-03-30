import { postRepository } from './PostRepository';

class PostService {
  async getPosts() {
    return await postRepository.findAll();
  }

  async getPostById(id: string) {
    const postId = parseInt(id, 10);
    if (!isNaN(postId)) {
      return await postRepository.findById(postId);
    } else {
      throw new Error("Invalid post ID");
    }
  }
}

export const postService = new PostService();