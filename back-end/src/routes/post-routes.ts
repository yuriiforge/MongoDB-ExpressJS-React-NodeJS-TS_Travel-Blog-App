import { Router } from 'express';
import { postsController } from '../controllers/post-controller';

const postRouter = Router();

postRouter.get('/', postsController.getAllPosts);
postRouter.get('/:id', postsController.getPostById);
postRouter.post('/', postsController.addPost);
postRouter.put('/:id', postsController.updatePost);
postRouter.delete('/:id', postsController.deletePost);

export default postRouter;
