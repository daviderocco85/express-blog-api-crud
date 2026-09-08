import express from 'express';
import { postsRouter } from './routers/postsRouter.js';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});