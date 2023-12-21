import { Router } from "express";
import * as bitsHeartRouter from './../controllers/userBitsAndHeartsController';
import { validation } from "../middleware/requestValidation";
import * as validators from './../validation/bitsValidation'
import { authorizeUser } from "../middleware/authentication";
import { roles } from "../services/roles";

const router =Router();

router.post('/bit',authorizeUser([roles.admin,roles.user]),bitsHeartRouter.earnBits);
router.post('/newBit',authorizeUser([roles.admin,roles.user]),bitsHeartRouter.createBitAndHeartUser);
router.patch('/update-hearts',authorizeUser([roles.admin,roles.user]),bitsHeartRouter.updateHearts)
router.patch('/update-heartsat',authorizeUser([roles.admin,roles.user]),bitsHeartRouter.updateHeartsAT)
router.patch('/deduct-heart', authorizeUser([roles.admin,roles.user]), bitsHeartRouter.deductHearts);
router.patch('/deduct-bit', authorizeUser([roles.admin,roles.user]), bitsHeartRouter.deductBits);
router.get('/', authorizeUser([roles.admin,roles.user]), bitsHeartRouter.retrieveUserBitsAndHearts);
router.get('/leaderBoard', authorizeUser([roles.admin,roles.user]), bitsHeartRouter.getBitLeaderboard);







export default router;