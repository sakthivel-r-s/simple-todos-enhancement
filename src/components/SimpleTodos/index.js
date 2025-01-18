import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isCompleted: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isCompleted: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isCompleted: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isCompleted: false,
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, newTitle: ''}

  deleteTodo = uniqueNo => {
    const {todoList} = this.state
    const updatedList = todoList.filter(eachTodo => eachTodo.id !== uniqueNo)
    this.setState({todoList: updatedList})
  }

  editTodo = (uniqueNo, newTitle) => {
    const {todoList} = this.state
    const updatedList = todoList.map(eachTodo =>
      eachTodo.id === uniqueNo ? {...eachTodo, title: newTitle} : eachTodo,
    )
    this.setState({todoList: updatedList})
  }

  updateCheckedStatus = uniqueNo => {
    const {todoList} = this.state
    const updatedList = todoList.map(eachTodo =>
      eachTodo.id === uniqueNo
        ? {...eachTodo, isCompleted: !eachTodo.isCompleted}
        : eachTodo,
    )
    this.setState({todoList: updatedList})
  }

  updateNewTodo = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addNewTodo = () => {
    let {newTitle} = this.state
    newTitle = newTitle.trim()
    let updatedTitle = newTitle
    let lastChar = updatedTitle[updatedTitle.length - 1]
    let count = 0
    let finalCount = 1
    while (Number.isNaN(parseInt(lastChar)) === false) {
      finalCount = parseInt(lastChar)
      lastChar = newTitle.slice(newTitle.length - 1 - count)
      count += 1
    }
    updatedTitle = updatedTitle.slice(0, updatedTitle.length - count + 2).trim()
    console.log(updatedTitle)
    const newTodos = Array.from({length: finalCount}, (_, i) => ({
      id: Date.now() + i,
      title: updatedTitle,
      completed: false,
    }))

    this.setState(prevState => ({
      todoList: [...prevState.todoList, ...newTodos],
      newTitle: '',
    }))
  }

  updateTodoTitle = (updateId, updatedTitle) => {
    this.setState(prevState =>
      prevState.todoList.map(eachTodo =>
        eachTodo.id === updateId
          ? {...eachTodo, title: updatedTitle}
          : eachTodo,
      ),
    )
  }

  render() {
    const {todoList, newTitle} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo">
            <input
              type="text"
              name="newTitle"
              value={newTitle}
              onChange={this.updateNewTodo}
              placeholder="Enter todo title"
              className="newTitle"
            />
            <button
              className="add-button"
              onClick={this.addNewTodo}
              type="button"
            >
              Add
            </button>
          </div>
          <ul>
            {todoList.map(todo => (
              <TodoItem
                todo={todo}
                deleteTodo={this.deleteTodo}
                key={todo.id}
                updateCheckedStatus={this.updateCheckedStatus}
                updateTodoTitle={this.updateTodoTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
