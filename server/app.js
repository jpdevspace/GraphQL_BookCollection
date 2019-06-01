const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');
const dbConfig = require('./config/config');

const app = express();

// Allow cross-origin requests CORS
app.use(cors());

// Mongoose setup
mongoose.connect(`mongodb+srv://jjpnetninja:${dbConfig.pwd}@gql-ninja-kmnhl.mongodb.net/test?retryWrites=true`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('MongoDB Connected'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => console.log('Now Listening On Port 4000'));