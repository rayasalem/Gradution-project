import { Request, Response } from 'express';
import ChatModel, { Ichat } from '../db/schemas/chatCourseSchema';
export const createChat = async (req: Request, res: Response) => {
    try {
      const { lessonId } = req.params;
      const newChat: Ichat = new ChatModel({
        lessonId,
      });
      const chat: Ichat = await newChat.save();
      res.status(201).json({ message: 'Chat created successfully', chat });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create new chat' });
    }
  };
export const addComment = async (req: Request, res: Response) => {
    try {
        const author=req.user?._id
        const { lessonId } = req.params;
        const {text} = req.body;
      const chat: Ichat | null = await ChatModel.findOne({ lessonId });
      if (chat) {
        chat.messages.push({ text, author });
        await chat.save();
        res.status(200).json({ message: 'Comment added successfully', chat });
      } else {
        res.status(404).json({ error: 'Chat not found for the given lesson ID' });
      }
    } catch (error) {
      console.error("Server-side error:", error);
      res.status(500).json({ error: 'Failed to add comment' });
    }
  };
  export const getAllComments = async (req: Request, res: Response) => {
    try {
      const { lessonId } = req.params;
  
      const chat: Ichat | null = await ChatModel.findOne({ lessonId }).populate({
        path: 'messages.author', 
        model: 'User', 
        select: 'username avatar', 
      });;
  
      if (chat) {
        res.status(200).json({ messages: chat.messages });
      } else {
        res.status(404).json({ error: 'Chat not found for the given lesson ID' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get comments' });
    }
  };