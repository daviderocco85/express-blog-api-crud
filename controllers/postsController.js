import fs from 'fs';
//import { postsList } from '../data/postsList.js';

const FILE_PATH = 'data/postsList.json';

const readPostsFromFile = () => {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
};

const writePostsToFile = (posts) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(posts, null, 2));
};


export const getAll = (req, res) => {
    const postsList = readPostsFromFile();

    let postsFilteredByTag = postsList;

    if (req.query.tags) {
        postsFilteredByTag = postsList.filter(
            p => p.tags.includes(req.query.tags)
        );
    }

    res.json(postsFilteredByTag);
};

export const getById = (req, res) => {

    const postsList = readPostsFromFile();

    const id = Number(req.params.id);

    const post = postsList.find(p => p.id === id);

    if (!post) {
        res.status(404).json({
            error: `Articolo con id ${id} non trovato`
        });
        return;
    }

    res.json(post);
};

export const create = (req, res) => {
    const newId = postsList.at(-1).id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    postsList.push(newPost);

    writePostsToFile(postsList);

    res.status(201).json(newPost);
};


export const update = (req, res) => {
    const postsList = readPostsFromFile();
    const id = Number(req.params.id);

    const post = postsList.find(p => p.id === id);

    if (!post) {
        res.status(404).json({
            error: `Articolo con id ${id} non trovato`
        });
        return;
    }

    if (!req.body.title || !req.body.content || !req.body.image || !req.body.tags) {
        res.status(400).json({
            error: "L'aggiornamento totale richiede tutte le proprietà: title, content, image, tags"
        });
        return;
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    writePostsToFile(postsList);


    res.json(post);

}


export const modify = (req, res) => {
    const postsList = readPostsFromFile();
    const id = Number(req.params.id);

    const post = postsList.find(p => p.id === id);

    if (!post) {
        res.status(404).json({
            error: `Articolo con id ${id} non trovato`
        });
        return;
    }

    if (req.body.title !== undefined) post.title = req.body.title;
    if (req.body.content !== undefined) post.content = req.body.content;
    if (req.body.image !== undefined) post.image = req.body.image;
    if (req.body.tags !== undefined) post.tags = req.body.tags;

    writePostsToFile(postsList);

    res.json(post);
};

export const deleteById = (req, res) => {
    const postsList = readPostsFromFile();
    const id = Number(req.params.id);

    const post = postsList.find(p => p.id === id);

    if (!post) {
        res.status(404).json({
            error: `Articolo con id ${id} non trovato`
        });
        return;
    }

    postsList.splice(postsList.indexOf(post), 1);

    console.log(`Post con id ${id} eliminato, nuovo lista dei Post`, postsList);

    writePostsToFile(postsList);

    res.sendStatus(204);
};