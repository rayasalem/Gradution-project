import { Request, Response, NextFunction } from 'express';
import QuizTakerModel, { IQuizTaker } from './../db/schemas/quizTakerSchema';

export const createQuizTaker = async (req: Request, res: Response) => {
  try {
    const { userId, quizId, answers } = req.body;
    const quizTaker =  await new QuizTakerModel({ userId, quizId, answers });
    const savedQuizTaker = await quizTaker.save();
    res.status(201).json(savedQuizTaker);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const getQuizTaker = async (req: Request, res: Response) => {
  try {
    const { quizTakerId } = req.query;
    const quizTaker = await QuizTakerModel.findById(quizTakerId);
    if (!quizTaker) {
      return res.status(404).json({ message: 'QuizTaker not found' });
    }
    res.json(quizTaker);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const listQuizTakers = async (req: Request, res: Response) => {
  try {
    const quizTakers = await QuizTakerModel.find();
    res.json(quizTakers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const updateQuizTaker = async (req: Request, res: Response) => {
  try {
    const { quizTakerId } = req.query;
    const { userId, quizId, answers } = req.body;
    const updatedQuizTaker : IQuizTaker|null = await QuizTakerModel.findByIdAndUpdate(quizTakerId, { userId, quizId, answers }, { new: true });
    if (!updatedQuizTaker) {
      return res.status(404).json({ message: 'QuizTaker not found' });
    }
    res.json(updatedQuizTaker);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteQuizTaker = async (req: Request, res: Response) => {
  try {
    const { quizTakerId } = req.query;
    const deletedQuizTaker = await QuizTakerModel.findByIdAndRemove(quizTakerId);
    if (!deletedQuizTaker) {
      return res.status(404).json({ message: 'QuizTaker not found' });
    }
    res.json({ message: 'QuizTaker deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};