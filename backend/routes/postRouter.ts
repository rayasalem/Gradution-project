import { Router } from "express";
import * as postRouter from '../controllers/postController';
import { authorizeUser } from "../middleware/authentication";
import { roles } from "../services/roles";

const router =Router();
router.post('/createPost',authorizeUser([roles.admin,roles.user]),postRouter.createPost);


export default router;