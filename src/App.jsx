import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Button from './components/Button'
import Todo from './components/Todo'

function App() {

  const [todos, setTodos] = useState([])
  const [changeTodo, setChangeTodo] = useState('')
  const [todo, setTodo] = useState({
    id: uuidv4(),
    text: '',
    isEdit: false
  })

  function handleChange(e) {
    setTodo({id: uuidv4(), text: e.target.value})
  }

  function editChangeTodo(e) {
    setChangeTodo(e.target.value)
  }

  function addTodo() {
    if(todo.text.trim().length > 0) {
      setTodos(prev => {
        return [...prev, todo]
      })
    }else {
      alert("Bo'shliqni to'diring!")
    }
    setTodo({
      id: uuidv4(),
      text: '',
      isEdit: false
    })
  }

  function editTodo(id) {
    setTodos(prev => {
      return prev.map(item => {
        if(item.id === id) {
          item.isEdit = true
          setChangeTodo(item.text)
        }else {
          item.isEdit = false
        }
        return item
      })
    })
  }

  function changeClick(id) {
    setTodos(prev => {
      return prev.map(item => {
        if(item.id === id) {
          item.text = changeTodo
          item.isEdit = false
          return item
        }else {
          return item
        }
      })
    })
  }

  

  function deleteTodo(id) {
    setTodos(prev => {
      return prev.filter(item => id !== item.id)
    })
  }


  return (
    <div className='todo-card'>
      <h1>Todo List</h1>
        <div className="add-todo">
          <input type="text" placeholder='Add todo' onChange={handleChange} value={todo.text}/>
          <Button style={'add'} title={'Add'} onClick={addTodo}/>
        </div>
        <ul>
          {
            todos.length > 0 ? (
              todos.map((todo) => {
                return (
                  <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} changeTodo={changeTodo} handleChange={editChangeTodo} changeClick={changeClick}/>
                )
              })
            ) : (
              <h2>Todo mavjut emas :(</h2>
            )
          }
        </ul>
    </div>
  )
}

export default App