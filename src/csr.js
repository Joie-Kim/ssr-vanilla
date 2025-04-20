import { TodoForm, TodoList } from './components.js';
import { model } from './model.js';
import { setupTodoEvents } from './events/todoEvents.js';

// 초기 상태 업데이트
if (window.__INITIAL_STATE__) {
  model.setInitialTodoItems(window.__INITIAL_STATE__);
}

// 이벤트 리스너 설정
setupTodoEvents();

// 렌더링 함수
export const render = () => {
  const $app = document.querySelector('#app');
  $app.innerHTML = `
    ${TodoForm()}
    ${TodoList(model.todoItems)}
  `;
};
