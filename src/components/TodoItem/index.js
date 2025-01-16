import './index.css'

const TodoItem = props => {
  const {todo, DeleteTodo} = props
  const {id, title} = todo

  const onDeleteTodo = () => {
    DeleteTodo(id)
  }

  return (
    <li className="todo-container">
      <p>{title}</p>
      <button
        className="custom-button"
        id={id}
        onClick={onDeleteTodo}
        type="button"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
