const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());

const PORT = process.env.PORT || 4000;

dotenv.config({path: './config.env'});

require('./db doc/atlas_conn');
app.use(express.json()); 
app.use(bodyParser.json());

const router = require('./router/router');
app.use(router);

app.listen(PORT, () => {
  console.log('server is running at http://localhost:4000');
});
