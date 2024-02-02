import { Request, Response } from 'express';
import Lesson, { ILesson } from '../db/schemas/lessonSchema';
import TextSlideModel, { ITextSlide } from '../db/schemas/TextSlideSchema'; 

export const createTextSlide = async (req: Request, res: Response) => {
  try {
    const {lessonId, type, order, text } = req.body;
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    const newTextSlide: ITextSlide = new TextSlideModel({
      lessonId,
      type,
      order,
      text,
    });

   const TextSlide: ITextSlide= await newTextSlide.save();

    res.status(201).json({ message: 'Text slide created successfully', textSlide: TextSlide });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new text slide' });
  }
};

export const editTextSlide = async (req: Request, res: Response) => {
  const { textSlideId } = req.params;
  try {
    const updatedTextSlide = await TextSlideModel.findByIdAndUpdate(textSlideId, req.body, { new: true });

    if (!updatedTextSlide) {
      return res.status(404).json({ error: 'Text slide not found' });
    }

    res.status(200).json({ message: 'Text slide details updated', textSlide: updatedTextSlide });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update text slide details' });
  }
};

export const deleteTextSlide = async (req: Request, res: Response) => {
  const { textSlideId } = req.params;
  try {
    const deletedTextSlide = await TextSlideModel.findByIdAndRemove(textSlideId);

    if (!deletedTextSlide) {
      return res.status(404).json({ error: 'Text slide not found' });
    }

    res.status(200).json({ message: 'Deleted the text slide' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the text slide' });
  }
};

export const viewTextSlideDetails = async (req: Request, res: Response) => {
  const { textSlideId } = req.params;
  try {
    const textSlide = await TextSlideModel.findById(textSlideId);
    if (!textSlide) {
      return res.status(404).json({ error: 'Text slide not found' });
    }
    res.status(200).json({ message: 'Text slide details', textSlide });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve text slide details' });
  }
};

export const listTextSlidesInLesson = async (req: Request, res: Response) => {
  const { lessonId } = req.params;
  try {
    const textSlides = await TextSlideModel.find({ lessonId }).sort({ order: 1 });
    res.status(200).json({ message: 'List of text slides in the lesson', textSlides });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve text slides in the lesson' });
  }
};