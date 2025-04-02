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
          // items 변수를 스크립트 내에서 사용할 수 있도록 정의
          const items = ${JSON.stringify(items)};

          // 추가 버튼에 이벤트 리스너 추가
          const $addButton = document.querySelector('#add');
          const $todoInput = document.querySelector('#todo-input');

          $addButton.addEventListener('click', async () => {
            const item = $todoInput.value;
            if (item.trim() === '') return;

            try {
              const response = await fetch('/api/todo', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ item }),
              });

              if (response.ok) {
                window.location.reload(); // 페이지 새로고침
              }
            } catch (error) {
              console.error('Error adding todo:', error);
            }
          });

          // 삭제 버튼에 이벤트 리스너 추가
          items.forEach((_, index) => {
            const $removeButton = document.querySelector(\`#remove-\${index}\`);
            $removeButton.addEventListener('click', async () => {
              try {
                const response = await fetch(\`/api/todo/\${index}\`, {
                  method: 'DELETE',
                });

                if (response.ok) {
                  window.location.reload(); // 페이지 새로고침
                }
              } catch (error) {
                console.error('Error removing todo:', error);
              }
            });
          });
        </script>
      </body>
    </html>
  `;
};
