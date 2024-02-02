import { Router } from "express";
import * as commentRouter from '../controllers/commentController';
import { authorizeUser } from "../middleware/authentication";
import { roles } from "../services/roles";
import { validation } from '../middleware/requestValidation';
import * as validators from '../validation/commentValidation';
const router =Router();
router.post('/createComment/:postId',authorizeUser([roles.admin,roles.user]),commentRouter.createCommentByPostId);
router.get('/CommentById/:commentId',authorizeUser([roles.admin,roles.user]),commentRouter.getCommentById);
router.patch('/updateComment/:commentId',authorizeUser([roles.admin,roles.user]),commentRouter.updateComment);
router.delete('/deleteComment/:commentId',authorizeUser([roles.admin,roles.user]),commentRouter.deleteComment);
router.get('/Comments/:postId',authorizeUser([roles.admin,roles.user]),commentRouter.getCommentsByPostId);
router.get('/Myanswer',authorizeUser([roles.admin,roles.user]),commentRouter.getUserAnswers);
router.post('/comments/:commentId/like',authorizeUser([roles.admin,roles.user]), commentRouter.likeComment);
router.delete('/comments/:commentId/unlike',authorizeUser([roles.admin,roles.user]), commentRouter.removeLike);
router.post('/hasUserLikedcomment/:commentId', authorizeUser([roles.admin,roles.user]), commentRouter.hasUserLikedComment);





export default router;