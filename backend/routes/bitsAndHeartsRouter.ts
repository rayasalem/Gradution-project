import { Router } from "express";
import * as bitsHeartRouter from './../controllers/userBitsAndHeartsController';
import { authorizeUser } from "../middleware/authentication";
import { roles } from "../services/roles";

const router =Router();

router.post('/bit',authorizeUser([roles.user]),bitsHeartRouter.earnBits);
router.post('/newBit',authorizeUser([roles.user]),bitsHeartRouter.createBitAndHeartUser);
router.patch('/update-hearts',authorizeUser([roles.user]),bitsHeartRouter.updateHearts)
router.patch('/update-heartsat',authorizeUser([roles.user]),bitsHeartRouter.updateHeartsAT)
router.patch('/deduct-heart', authorizeUser([roles.user]), bitsHeartRouter.deductHearts);
router.patch('/deduct-bit', authorizeUser([roles.user]), bitsHeartRouter.deductBits);
router.get('/', authorizeUser([roles.user]), bitsHeartRouter.retrieveUserBitsAndHearts);
router.get('/leaderBoard', authorizeUser([roles.admin,roles.user]), bitsHeartRouter.getBitLeaderboard);







export default router;