import { Request, Response } from 'express';
import Tag, { ITag } from '../db/schemas/tagSchema';

export const createTag = async (req: Request, res: Response) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json({ message: 'Tag created successfully', data: newTag });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create tag', error });
  }
};

export const getTags = async (req: Request, res: Response) => {
  try {
    const tags = await Tag.find();
    res.json({ data: tags });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to get tags', error });
  }
};

export const getTagById = async (req: Request, res: Response) => {
  const { tagId } = req.query;
  try {
    const tag = await Tag.findById(tagId);
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.json({ data: tag });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to get tag by ID', error });
  }
};

export const updateTag = async (req: Request, res: Response) => {
const { tagId } = req.query;
  try {
    const updatedTag = await Tag.findByIdAndUpdate(tagId, req.body, { new: true });
    if (!updatedTag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.json({ message: 'Tag updated successfully', data: updatedTag });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to update tag', error });
  }
};

export const deleteTag = async (req: Request, res: Response) => {
  const { tagId } = req.query;
  try {
    const deletedTag = await Tag.findByIdAndDelete(tagId);
    if (!deletedTag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.json({ message: 'Tag deleted successfully', data: deletedTag });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to delete tag', error });
  }
};