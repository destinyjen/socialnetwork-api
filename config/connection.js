// create imports for express and mongoose
const { connect, connection } = require('mongoose');

// create connection to MongoDB
const connectionString = 'mongodb://127.0.0.1:27017/api-socailNetworkdb';

// connect to MongoDB
connect(connectionString);

// export connection
module.exports = connection;