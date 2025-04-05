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
        <script type="module" src="src/main.js"></script>
      </body>
    </html>
  `;
};
