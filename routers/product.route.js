import express from 'express';
import { getProduct, getOneProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router()

router.get('/', getProduct)
router.get('/:id', getOneProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;
