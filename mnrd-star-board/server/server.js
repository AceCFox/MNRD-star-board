const express = require("express");
require("dotenv").config();

//https configuration - required for deployment (uncomment)
// const fs = require('fs')
// const https = require('https');
// const options = {
//   key: fs.readFileSync('/etc/letsencrypt/live/onboard.zefenergy.com/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/onboard.zefenergy.com/fullchain.pem')
// };

//express app
const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

//express https configuration - uncomment for deployment
//const httpsServer = https.createServer(options, app);

// Route includes
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
//change this back for deployment
//const PORT = process.env.PORT || 443;
const PORT = 5000;

/** Listen * */
//change this back for deployment
// httpsServer.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });