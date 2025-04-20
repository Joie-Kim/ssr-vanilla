import { model } from '../model.js';
import { syncTodoItems } from '../sync/todoSync.js';
import { render } from '../csr.js';

// 이벤트 위임을 사용하여 이벤트 리스너 추가
export const setupTodoEvents = () => {
  const $app = document.querySelector('#app');
  $app.addEventListener('click', async (e) => {
    if (e.target.id === 'add') {
      const $todoInput = document.querySelector('#todo-input');
      const newItem = $todoInput.value;

      // 새 항목을 추가하고 전체 리스트를 서버와 동기화
      const updatedItems = [...model.todoItems, newItem];
      const success = await syncTodoItems(updatedItems);

      if (success) {
        $todoInput.value = '';
        render(); // UI 다시 렌더링
      } else {
        alert('할 일을 추가하는데 실패했습니다. 다시 시도해주세요.');
      }
    } else if (e.target.id.startsWith('remove-')) {
      const index = parseInt(e.target.id.split('-')[1]);

      // 항목을 삭제하고 전체 리스트를 서버와 동기화
      const updatedItems = [...model.todoItems];
      updatedItems.splice(index, 1);
      const success = await syncTodoItems(updatedItems);

      if (success) {
        render(); // UI 다시 렌더링
      } else {
        alert('할 일을 삭제하는데 실패했습니다. 다시 시도해주세요.');
      }
    }
  });
};
