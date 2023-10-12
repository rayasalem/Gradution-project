import { Router } from "express";
import * as AuthRouter from './../controllers/authController';
import { validation } from '../middleware/requestValidation';
import * as validators from '../middleware/requestValidation';

const router = Router();

router.post('/signUp', validation(validators.signup), AuthRouter.signUp);
router.get('/confirmEmail/:token', AuthRouter.confirmEmail);
router.post('/signIn', validation(validators.signin), AuthRouter.signIn);
router.get('/sendCode', validation(validators.sendCode), AuthRouter.sendCode);
router.get('/forgetpassword', validation(validators.forgetpassword), AuthRouter.forgetpassword);

export default router;
