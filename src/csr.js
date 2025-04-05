import { TodoForm, TodoList } from './components.js';
import { model } from './model.js';

// 초기 상태 업데이트
if (window.__INITIAL_STATE__) {
  model.setInitialTodoItems(window.__INITIAL_STATE__);
}

// 이벤트 위임을 사용하여 이벤트 리스너 추가
const $app = document.querySelector('#app');
$app.addEventListener('click', (e) => {
  if (e.target.id === 'add') {
    const $todoInput = document.querySelector('#todo-input');
    model.addTodoItem($todoInput.value);
    $todoInput.value = '';
    render(); // UI 다시 렌더링
  } else if (e.target.id.startsWith('remove-')) {
    const index = parseInt(e.target.id.split('-')[1]);
    model.removeTodoItem(index);
    render(); // UI 다시 렌더링
  }
});

export const render = () => {
  const $app = document.querySelector('#app');
  $app.innerHTML = `
    ${TodoForm()}
    ${TodoList(model.todoItems)}
  `;
};
