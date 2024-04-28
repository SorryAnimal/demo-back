import { Request, Response } from 'express';
import repository from '../repositories/post.repository';


async function createBlogPost(req: Request, res: Response) {
  try {
    const { title, content } = req.body;
    const postRepository = new repository.PrismaPostRepository();
    const newBlogPost = await postRepository.createPost(title, content);
    res.status(200).json(newBlogPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
}

const getBlogPosts = async (req: Request, res: Response) => {
  try {
    // Call repository to get all blog posts
    const postRepository = new repository.PrismaPostRepository();
    const blogPosts = await postRepository.getPosts();
    res.status(200).json(blogPosts);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createBlogPost,
  getBlogPosts,
};