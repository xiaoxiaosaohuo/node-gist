const express = require('express') 
const {StatusCodes} = require('http-status-codes');
const config  = require ('./config');
const {errorConverter,errorHandler}  = require ('./middleware/error');
const routes = require('./routes/v1');
const ApiError = require('./utils/APIError');
const path = require('path');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', routes);


// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(StatusCodes.NOT_FOUND, 'Not found'));
});
// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.listen(config.port,()=>{
  console.log(`service listening on port ${config.port}`)
});