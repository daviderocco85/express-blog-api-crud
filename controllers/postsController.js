import { postsList } from '../data/postsList.js';

export const getAll = (req, res) => {
    res.json(postsList);
};

export const getById = (req, res) => {
    const id = Number(req.params.id);
    const post = postsList.find(p => p.id === id);
    res.json(post);
};

export const create = (req, res) => {
    res.send(`Creazione dell'articolo del blog`);
};

export const update = (req, res) => {
    res.send(`Aggiornamento totale dell'articolo del blog con id: ${req.params.id}`);
};

export const modify = (req, res) => {
    res.send(`Aggiornamento parziale dell'articolo del blog con id: ${req.params.id}`);
};

export const deleteById = (req, res) => {
    res.send(`Eliminazione dell'articolo del blog con id: ${req.params.id}`);
};