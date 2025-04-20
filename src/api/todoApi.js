// 서버 API 호출
export const updateTodoItems = async (items) => {
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
