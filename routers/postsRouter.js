import express from 'express';
import * as postsController from '../controllers/postsController.js';

export const postsRouter = express.Router();

// Index di tutti gli articoli 
postsRouter.get('/', postsController.getAll);

// Show dell'articolo con specifico id
postsRouter.get('/:id', postsController.getById);

// Store
postsRouter.post('/', postsController.create);

// Update 
postsRouter.put('/:id', postsController.update);

// Modify
postsRouter.patch('/:id', postsController.modify);

// Destroy
postsRouter.delete('/:id', postsController.deleteById);