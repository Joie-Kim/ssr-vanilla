import { TodoForm, TodoList } from './components.js';

export const render = (items) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Todo List</title>
      </head>
      <body>
        <div id="app">
          ${TodoForm()}
          ${TodoList(items)}
        </div>
        <script>
          // 서버에서 전달받은 데이터를 저장
          window.__INITIAL_STATE__ = ${JSON.stringify(items)};
        </script>
        <script type="module" src="src/main.js"></script>
      </body>
    </html>
  `;
};
