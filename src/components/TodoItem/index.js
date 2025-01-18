import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo, updateCheckedStatus, updateTodoTitle} = props
  const {id, title, isCompleted} = todo

  const [currTitle, setTitle] = useState(title)
  const [isEdited, setEditStatus] = useState(false)

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onUpdateCheckedStatus = () => {
    updateCheckedStatus(id)
  }

  const onUpdateTodoTitle = () => {
    updateTodoTitle(id, currTitle)
  }

  const onTitleChange = event => {
    setTitle(event.target.value)
  }

  const onEditTitle = () => {
    setEditStatus(prev => !prev)
  }

  return (
    <li className="todo-container">
      <input
        className="checkbox"
        checked={isCompleted}
        onChange={onUpdateCheckedStatus}
        type="checkbox"
      />
      {isEdited ? (
        <input
          className="title-input"
          onChange={onTitleChange}
          type="text"
          value={currTitle}
        />
      ) : (
        <p className={`title-input ${isCompleted && 'task-completed'}`}>
          {currTitle}
        </p>
      )}
      <div className="button-container">
        {isEdited ? (
          <button
            className="custom-button save-button"
            id={id}
            onClick={(onUpdateTodoTitle, onEditTitle)}
            type="button"
          >
            Save
          </button>
        ) : (
          <button
            className="custom-button edit-button"
            id={id}
            onClick={onEditTitle}
            type="button"
          >
            Edit
          </button>
        )}
        <button
          className="custom-button"
          id={id}
          onClick={onDeleteTodo}
          type="button"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
