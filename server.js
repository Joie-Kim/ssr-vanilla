import express from 'express';
import { render } from './src/ssr.js';
import { model } from './src/model.js';

const app = express();

app.get('/', (req, res) => {
  res.send(render(model.todoItems));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
