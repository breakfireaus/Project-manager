import express from 'express';
import colors from 'colors';
require('dotenv').config();
import { graphQlHTTP } from 'express-graphql';
import schema from './schema/schema';
import connectDB from './config/db';

const port = process.env.PORT || 5000;

const app = express();

// connect to DATABASE
connectDB();

app.use(
  '/graphql',
  graphQlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
