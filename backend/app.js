const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

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

module.exports = app;
