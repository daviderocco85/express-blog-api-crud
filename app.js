import express from 'express';
import { postsRouter } from './routers/postsRouter.js';
import { notFound } from './middlewares/notFound.js';
import { errorsHandler } from './middlewares/errorsHandler.js';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json());

app.use('/posts', postsRouter);

app.use(notFound);

app.use(errorsHandler);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});