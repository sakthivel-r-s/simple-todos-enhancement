import './index.css'

import {Component} from 'react'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  DeleteTodo = uniqueNo => {
    const {todoList} = this.state
    const updatedList = todoList.filter(eachTodo => eachTodo.id !== uniqueNo)
    this.setState({todoList: updatedList})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {todoList.map(todo => (
              <TodoItem
                todo={todo}
                DeleteTodo={this.DeleteTodo}
                key={todo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
