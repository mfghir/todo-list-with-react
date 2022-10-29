const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitToHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusToHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="form">
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={submitToHandler}>
        <i class="fa fa-plus-square" aria-hidden="true"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusToHandler}>
          <option value="all">ALL</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
