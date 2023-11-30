import { Router } from "express";
import * as bitsHeartRouter from './../controllers/userBitsAndHeartsController';
import { validation } from "../middleware/requestValidation";
import * as validators from './../validation/bitsValidation'
import { authorizeUser } from "../middleware/authentication";
import { roles } from "../services/roles";

const router =Router();

router.post('/bit',authorizeUser([roles.admin]),bitsHeartRouter.earnBits);
router.post('/newBit',authorizeUser([roles.admin]),bitsHeartRouter.createBitAndHeartUser);
router.patch('/update-hearts',authorizeUser([roles.admin]),bitsHeartRouter.updateHearts)
router.patch('/deduct-heart', authorizeUser([roles.admin]), bitsHeartRouter.deductHearts);
router.get('/', authorizeUser([roles.admin]), bitsHeartRouter.retrieveUserBitsAndHearts);
router.get('/leaderBoard', authorizeUser([roles.admin]), bitsHeartRouter.getBitLeaderboard);







export default router;