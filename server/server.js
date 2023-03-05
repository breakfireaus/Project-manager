import express from 'express';
require('dotenv').config();
import { graphQlHTTP } from 'express-graphql';
import schema from './schema/schema';

const port = process.env.PORT || 5000;

const app = express();

app.use('/graphql', graphQlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, console.log(`Server running on port ${port}`));
