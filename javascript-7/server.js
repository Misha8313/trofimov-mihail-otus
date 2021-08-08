var express = require('express');
var { graphqlHTTP } = require('express-graphql');

const schema = require('./src/schema.js');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');