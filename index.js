const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const httpStatus = require('http-status');

//routes
const appeal = require('./routes/appeal');

(function server() {
    const app = express();
    const port = 3000
  
    initMiddlewares(app);
    initRoutes(app);
  
    // Connect Database
    const connectDB = require('./config/db');
    connectDB();


    app.listen(port, () =>
    console.log(`Server running on port ${port}`),
    );

})();

function initMiddlewares(app) {

    app.use(cors());
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(passport.initialize());
    app.use(passport.session());
}


function initRoutes(app) {
    app.get('/', (req, res) => res.send('Hello world!'));
    app.get('/favicon.ico', (req, res) => res.renderFile('Hello world!'));
  
    app.use('/appeal', appeal);

}