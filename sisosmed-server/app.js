const express = require('express');
const cors = require('cors')
const indexRouter = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const port = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(indexRouter);
app.use(errorHandler);

app.listen(port, () => console.log('app listen on', port))