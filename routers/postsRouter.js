import express from 'express';

export const postsRouter = express.Router();

// Index di tutti gli articoli 
postsRouter.get('/', (req, res) => {
    res.send(`Lista degli articoli del blog`);
});

// Show dell'articolo con specifico id
postsRouter.get('/:id', (req, res) => {
    res.send(`Articolo del blog con id: ${req.params.id}`);
});

// Store
postsRouter.post('/', (req, res) => {
    res.send(`Creazione dell'articolo del blog`);
});

// Update 
postsRouter.put('/:id', (req, res) => {
    res.send(`Aggiornamento totale dell'articolo del blog con id: ${req.params.id}`);
});

// Modify
postsRouter.patch('/:id', (req, res) => {
    res.send(`Aggiornamento parziale dell'articolo del blog con id: ${req.params.id}`);
});

// Destroy
postsRouter.delete('/:id', (req, res) => {
    res.send(`Eliminazione dell'articolo del blog con id: ${req.params.id}`);
});