import { TodoForm, TodoList } from './components.js';
import { model } from './model.js';

// 초기 상태 업데이트
if (window.__INITIAL_STATE__) {
  model.setInitialTodoItems(window.__INITIAL_STATE__);
}

// 서버 API 호출
const updateTodoItems = async (items) => {
  try {
    const response = await fetch('/api/todo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return null;
  } catch (error) {
    console.error('Failed to update todo items:', error);
  }
};

// 서버와 동기화하는 함수
const syncTodoItems = async (items) => {
  const data = await updateTodoItems(items);
  if (data) {
    model.setInitialTodoItems(data);
    return true;
  }
  return false;
};

// 이벤트 위임을 사용하여 이벤트 리스너 추가
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

export const render = () => {
  const $app = document.querySelector('#app');
  $app.innerHTML = `
    ${TodoForm()}
    ${TodoList(model.todoItems)}
  `;
};
