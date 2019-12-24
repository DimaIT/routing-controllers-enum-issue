import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';

import configureSwagger from './swagger';

import { ThreadController } from './threads/thread.controller';


const app = express();

app.use(express.json({ limit: '20mb' }));


useExpressServer(app, {
  defaultErrorHandler: false,
  controllers: [
    ThreadController,
  ],
});

configureSwagger(app);

export default app;
