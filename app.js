const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./routes/pages')
const apiRouter = require("./routes/apiRouter");

const connectToDatabase = require('./database/connect');
const {cors} = require("./middlewares/cors")
const cookieParser = require("cookie-parser");

const PORT = 3001;
const app = express();

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})