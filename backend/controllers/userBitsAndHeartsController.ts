import { NextFunction, Request, Response } from 'express';
import UserBitsAndHearts, {IUserBitsAndHearts} from './../db/schemas/userBitsAndHearts';
import userModel, { IUser } from '../db/schemas/userSchema';

export const createBitAndHeartUser =async (req: Request,res: Response) =>{
  try{
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }
     const userId = req.user._id;
     const userBitsAndHearts = await UserBitsAndHearts.findOne({ user_id: userId });
     if (!userBitsAndHearts) {
     const newBitTransaction: IUserBitsAndHearts = {
      user_id: userId,
      bits_earned: 0,
      hearts_earned: 3, 
      action_type: 'lesson',
      timestamp: new Date(),
    }as IUserBitsAndHearts;
    const createdTransaction = await UserBitsAndHearts.create(newBitTransaction);
       res.json({ message: 'Bits create successfully', createdTransaction });
  }else {
    res.status(400).json({ message: 'already exists' });

  }
  }catch (error) {
    res.status(400).json({ message: 'Failed to create bits ', error });
  }
}
export const earnBits = async (req: Request, res: Response) => {
    try {
    if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
    const userId = req.user._id; 
      const actionTypes = {
      lesson: 10,
      elementaryLevel: 5,
      proficientLevel: 10,
      advancedLevel: 15,
    };
    const {actionType} = req.body as { actionType: 'lesson' | 'elementaryLevel' | 'proficientLevel' | 'advancedLevel' }; 
    if (!actionTypes[actionType]) {
      return res.status(400).json({ message: 'Invalid action type' });
    }
  
    const bitsEarned = actionTypes[actionType];
      const userBitsAndHearts = await UserBitsAndHearts.findOne({ user_id: userId });
  
      if (!userBitsAndHearts) {
        const newBitTransaction: IUserBitsAndHearts = {
          user_id: userId,
          bits_earned: bitsEarned,
          hearts_earned: 0, 
          action_type: actionType,
          timestamp: new Date(),
        }as IUserBitsAndHearts;
        await UserBitsAndHearts.create(newBitTransaction);
      } else {
        userBitsAndHearts.bits_earned += bitsEarned;
        await userBitsAndHearts.save();
      }
  
      res.json({ message: 'Bits earned successfully', bitsEarned });
    } catch (error) {
      res.status(400).json({ message: 'Failed to earn bits', error });
    }
  };
export const updateHearts = async (req: Request, res: Response) => {
    try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    const userId = req.user._id;
      const userBitsAndHearts = await UserBitsAndHearts.findOne({ user_id: userId });
      if (!userBitsAndHearts) {
        return res.status(404).json({ message: 'User bits and hearts record not found' });
      }
      userBitsAndHearts.hearts_earned = 3;
      await userBitsAndHearts.save();
  
      res.json({ message: 'Hearts updated to 3 successfully', updatedHearts: 3 });
    } catch (error) {
      res.status(400).json({ message: 'Failed to update hearts', error });
    }
  };
export const updateHeartsAT = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
      const userId = req.user._id;
      const userBitsAndHearts = await UserBitsAndHearts.findOne({ user_id: userId });
      if (!userBitsAndHearts) {
        return res.status(404).json({ message: 'User bits and hearts record not found' });
      }
      const currentTime = new Date();
      const lastUpdate = userBitsAndHearts.timestamp || new Date(0);
      const timeDifference = currentTime.getTime() - lastUpdate.getTime();
      const hoursPassed = timeDifference / (1000 * 60 * 60);
  
      if (hoursPassed >= 4) {
        userBitsAndHearts.hearts_earned += 3;
        userBitsAndHearts.timestamp = currentTime;
        await userBitsAndHearts.save();
  
        res.json({ message: 'Hearts updated to ' + userBitsAndHearts.hearts_earned + ' successfully', updatedHearts: userBitsAndHearts.hearts_earned });
      } else {
        res.json({ message: 'Not enough time has passed since the last update' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Failed to update hearts', error });
    }
  };
export const deductHearts = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
      const userId = req.user._id;
      const userBitsAndHearts = await UserBitsAndHearts.findOne({ user_id: userId });
      if (!userBitsAndHearts || userBitsAndHearts.hearts_earned < 1) {
        return res.status(400).json({ message: 'Insufficient hearts' });
      }
      userBitsAndHearts.hearts_earned -= 1;
        await userBitsAndHearts.save();
      res.json({ message: 'Hearts deducted successfully', updatedHeartsCount: userBitsAndHearts.hearts_earned });
    } catch (error) {
      res.status(400).json({ message: 'Failed to deduct hearts', error });
    }
  };
export const deductBits = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
      const userId = req.user._id;
      const userBitsAndHearts = await UserBitsAndHearts.findOne({ user_id: userId });
      if (!userBitsAndHearts || userBitsAndHearts.bits_earned < 60) {
        return res.status(400).json({ message: 'Insufficient Bits' });
      }
      userBitsAndHearts.bits_earned -= 60;
        await userBitsAndHearts.save();
      res.json({ message: 'Bits deducted successfully', updatedBitsCount: userBitsAndHearts.bits_earned });
    } catch (error) {
      res.status(400).json({ message: 'Failed to deduct Bits', error });
    }
  };
export const retrieveUserBitsAndHearts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
      const userId = req.user._id;
      const userBitsAndHearts = await UserBitsAndHearts.findOne({ user_id: userId });
      if (!userBitsAndHearts) {
        return res.status(404).json({ message: 'User data not found' });
      }
      const bitsCount = userBitsAndHearts.bits_earned;
      const heartsCount = userBitsAndHearts.hearts_earned;
  
      res.json({ bitsCount, heartsCount });
    } catch (error) {
      res.status(400).json({ message: 'Failed to retrieve bits and hearts', error });
    }
  };  
export const getBitLeaderboard = async (req: Request, res: Response) => {
try {
      const leaderboard = await UserBitsAndHearts.find()
          .sort({ bits_earned: -1 }) 
          .limit(5); 
            const userIDs = leaderboard.map((entry) => entry.user_id);
            const leaderboardWithUserInfo = await Promise.all(
                leaderboard.map(async (entry) => {
                  const user = await userModel.findById(entry.user_id);
                  const userName = user?.username || 'Anonymous';
                  const userPhoto = user?.avatar || null;
                  const bitsEarned = entry.bits_earned;
                  return {
                    name: userName,
                    photo: userPhoto,
                    bits: bitsEarned,
                  };
                })
              );
              res.json(leaderboardWithUserInfo);
      } catch (error) {
        res.status(400).json({ message: 'Failed to retrieve bit leaderboard', error });
      }
  };
