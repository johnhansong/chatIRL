const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize'); // for sequelize errors

// checking environment variable in .config/index.js file
const { environment } = require('./config')
const isProduction = environment === 'production';

// backend/app.js
const routes = require('./routes');

// initialize Express
const app = express();

// middleware for logging info about requests and responses
app.use(morgan('dev'));

// middleware for parsing cookies
app.use(cookieParser());

// middleware for parsing JSON bodies with reqs with content-type of application/json
app.use(express.json())


// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}

  // helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
    })
);

  // Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
    cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
    }
    })
);


// connect all the routes
app.use(routes);


// Error handlers
// catching all non-specific errors
app.use((_req, _res, next) => {
    // we are not using { _req, _res } in this callback function
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = { message: "The requested resource couldn't be found." };
    err.status = 404;
    next(err);
});



app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
        let errors = {};
        for (let error of err.errors) {
        errors[error.path] = error.message;
    }
        err.title = 'Validation error';
        err.errors = errors;
    }
    next(err);
});

// Error formatter. Sends the response back to the client
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    // console.error(err); //eventually remove
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack
    });
});

module.exports = app;
