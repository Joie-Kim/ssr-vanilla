const TodoItem = (item, index) => {
  return `
    <li style="list-style: none;">
      <input type="checkbox" />
      <label>${item}</label>
      <button id="remove-${index}">삭제</button>
    </li>
  `;
};

const TodoList = (items) => {
  return `
    <ul>
      ${items.map(TodoItem).join('')}
    </ul>
  `;
};

const TodoForm = () => {
  return `
    <div>
      <input type="text" id="todo-input" />
      <button id="add">추가</button>
    </div>
  `;
};

export { TodoItem, TodoList, TodoForm };
