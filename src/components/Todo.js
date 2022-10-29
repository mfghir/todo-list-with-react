const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHAndler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <i class="fa fa-check" aria-hidden="true"></i>
      </button>
      <button className="trash-btn" onClick={deleteHAndler}>
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Todo;
