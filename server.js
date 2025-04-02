import express from 'express';
import { render } from './src/ssr.js';
import { model } from './src/model.js';

const app = express();

// 요청 본문을 파싱하기 위한 미들웨어 추가
app.use(express.json());

app.get('/', (req, res) => {
  res.send(render(model.todoItems));
});

app.post('/api/todo', (req, res) => {
  model.addTodoItem(req.body.item);
  res.status(201).send();
});

app.delete('/api/todo/:id', (req, res) => {
  model.removeTodoItem(req.params.id);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
