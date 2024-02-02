import { Request, Response } from 'express';
import FeedBackModel, { IFeed } from '../db/schemas/FeedBackSchema';

export const createFeedBack = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    const newFeedback: IFeed = new FeedBackModel({
      text,
    });

    const feedback: IFeed = await newFeedback.save();

    res.status(201).json({ message: 'Feedback created successfully', feedback });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create new feedback' });
  }
};

export const getAllFeedBack = async (_req: Request, res: Response) => {
  try {
    const feedbackList: IFeed[] = await FeedBackModel.find();

    res.status(200).json({ message: 'List of all feedback', feedbackList });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve feedback list' });
  }
};

export const getFeedbackRead = async (_req: Request, res: Response) => {
  try {
    const readFeedbackList: IFeed[] = await FeedBackModel.find({ isRead: true });

    res.status(200).json({ message: 'List of read feedback', feedbackList: readFeedbackList });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve read feedback list' });
  }
};
export const getFeedbackUnRead = async (_req: Request, res: Response) => {
  try {
    const unreadFeedbackList: IFeed[] = await FeedBackModel.find({ isRead: false });

    res.status(200).json({ message: 'List of unread feedback', feedbackList: unreadFeedbackList });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve unread feedback list' });
  }
};
export const setFeedbackRead = async (req: Request, res: Response) => {
  const { feedbackId } = req.params;

  try {
    const updatedFeedback = await FeedBackModel.findByIdAndUpdate(
      feedbackId,
      { isRead: true },
      { new: true }
    );
    if (!updatedFeedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    res.status(200).json({ message: 'Feedback marked as read', feedback: updatedFeedback });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark feedback as read' });
  }
};
