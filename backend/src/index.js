const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://root:R00tUs3r@cpsc2600-t4j3f.mongodb.net/neighbourHelp?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);