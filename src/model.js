export const model = {
  todoItems: ['CSR로 TODO 만들기', 'SSR로 TODO 만들기', 'Hydration 이해하기'],
  addTodoItem: (item) => {
    model.todoItems.push(item);
  },
  removeTodoItem: (index) => {
    model.todoItems.splice(index, 1);
  },
  setInitialTodoItems: (initialState) => {
    model.todoItems = initialState;
  },
};
