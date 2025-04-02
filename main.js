// #region data
const todoItems = [
  'CSR로 TODO 만들기',
  'SSR로 TODO 만들기',
  'Hydration 이해하기',
];

const addItem = (item) => {
  todoItems.push(item);
  render();
};

const removeItem = (index) => {
  todoItems.splice(index, 1);
  render();
};
// #endregion

// #region component
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
// #endregion

// #region render
const render = () => {
  const $app = document.querySelector('#app');
  $app.innerHTML = `
    ${TodoForm()}
    ${TodoList(todoItems)}
  `;

  // 이벤트 리스너 추가
  const $addButton = document.querySelector('#add');
  const $todoInput = document.querySelector('#todo-input');

  $addButton.addEventListener('click', () => {
    addItem($todoInput.value);
    $todoInput.value = '';
  });

  todoItems.forEach((_, index) => {
    const $removeButton = document.querySelector(`#remove-${index}`);
    $removeButton.addEventListener('click', () => {
      removeItem(index);
    });
  });
};
// #endregion

render();
