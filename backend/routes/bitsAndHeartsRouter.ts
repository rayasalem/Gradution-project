import { Router } from "express";
import * as bitsHeartRouter from './../controllers/userBitsAndHeartsController';
import { validation } from "../middleware/requestValidation";
import * as validators from './../validation/bitsValidation'
import { authorizeUser } from "../middleware/authentication";
import { roles } from "../services/roles";

const router =Router();

router.post('/bit',authorizeUser([roles.user]),validation(validators.earnBits),bitsHeartRouter.earnBits);
router.patch('/update-hearts',authorizeUser([roles.user]),bitsHeartRouter.updateHearts)
router.patch('/deduct-heart', authorizeUser([roles.user]), bitsHeartRouter.deductHearts);
router.get('/', authorizeUser([roles.user]), bitsHeartRouter.retrieveUserBitsAndHearts);
router.get('/leaderBoard', authorizeUser([roles.admin]), bitsHeartRouter.getBitLeaderboard);







export default router;