import { model } from '../model.js';
import { updateTodoItems } from '../api/todoApi.js';

// 서버와 동기화하는 함수
export const syncTodoItems = async (items) => {
  const data = await updateTodoItems(items);
  if (data) {
    model.setInitialTodoItems(data);
    return true;
  }
  return false;
};
