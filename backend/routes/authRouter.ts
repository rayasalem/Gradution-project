import { Router } from "express";
import * as AuthRouter from './../controllers/authController';
import { validation } from "../middleware/requestValidation";
import * as validators from './../validation/authValidation'

const router =Router();


router.post('/signUp',validation(validators.signup),AuthRouter.signUp);
router.get('/confirmEmail/:token',AuthRouter.confirmEmail)
router.post('/signIn',validation(validators.signin),AuthRouter.signIn);
router.patch('/sendCode',validation(validators.sendCode),AuthRouter.sendCode)
router.patch('/forgetPassword',validation(validators.forgetpassword),AuthRouter.forgetPassword)

export default router;