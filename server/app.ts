import express from 'express';
import { connectToDB } from './src/db/connection';
import router from './src/routes';

const app = express();

connectToDB();

app.use('/api/v1', router);

export default app;
