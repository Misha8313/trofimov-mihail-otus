var express = require('express');
var cors = require('cors')
var { graphqlHTTP } = require('express-graphql');

const schema = require('./src/schema.ts');


var app = express();
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  graphql: true,
}));


app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
