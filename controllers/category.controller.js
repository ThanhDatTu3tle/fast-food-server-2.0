import { CategoryModel } from "../models/CategoryModel.js";
import { ProductModel } from "../models/ProductModel.js";

export const getCategory = async (req, res) => {
    try {
        // const { categoryID } = req.value.params
        const category = await CategoryModel.find()
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const createCategory = async (req, res) => {
    try {
        const newCategory = new CategoryModel(req.body)
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};
