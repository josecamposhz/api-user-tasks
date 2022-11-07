require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

// cors config
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', function (_req, res) {
  res.send({
    name: 'Express API',
    environment: process.env.NODE_ENV
  });
});

app.use('/api', routes);
app.use(errorHandler);

/* istanbul ignore if */
//*This means: Run app.listen(8080) only if you are running the file
if (!module.parent) {
  const server = app.listen(process.env.PORT, function () {
    const port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
  });
}

module.exports = app;
