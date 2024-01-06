import { Request, Response } from 'express';
import CategoryModel, { ICategory } from '../db/schemas/categorySchema';
import CourseModel from '../db/schemas/courseSchema';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description, courseId } = req.body; 
    const category:ICategory = new CategoryModel({ name, description });
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
    if (courseId) {
      const course = await CourseModel.findById(courseId);
      if (course) {
        course.category = savedCategory._id ; 
        await course.save();
      } else {
        return res.status(404).json({ message: 'Course not found' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const getCategory = async (req: Request, res: Response) => {
  try {
    const  categoryId  = req.query.categoryId;
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const listCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.query;
    const { name, description }:ICategory = req.body;
    const updatedCategory = await CategoryModel.findByIdAndUpdate(categoryId, { name, description }, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const categoryId  = req.query.categoryId;
    const deletedCategory = await CategoryModel.findByIdAndRemove(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};