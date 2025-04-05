import express from 'express';
import { render } from './src/ssr.js';
import { model } from './src/model.js';

const app = express();

// 요청 본문을 파싱하기 위한 미들웨어 추가
app.use(express.json());

// 정적 파일 등록
app.use('/src', express.static('src'));

// 서버 메모리에 todoItems 저장
// 기존 model.js의 todoItems 대신 사용
let serverTodoItems = ['Test 1', 'Test 2', 'Test 3'];

app.get('/', (req, res) => {
  res.send(render(serverTodoItems));
});

// 전체 리스트를 갱신하는 API
app.put('/api/todo', (req, res) => {
  // 서버 메모리 업데이트
  serverTodoItems = req.body.items;
  res.status(200).send(serverTodoItems);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
