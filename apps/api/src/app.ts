import { db, users } from '@repo/db';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import api from './api';
import MessageResponse from './interfaces/MessageResponse';
import * as middlewares from './middlewares';

require('dotenv').config();

const app: ReturnType<typeof express> = express();

app.use(morgan('dev'));

app.use(helmet());

app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.get('/users', async (req, res) => {
  try {
    const usersData = await db.select().from(users);

    return res.status(200).json({ message: 'success', users: usersData });
  } catch (err) {
    return res.status(500).json({ message: 'error', err });
  }
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
