
import Button from "./Button"

function Todo({todo, deleteTodo, editTodo, changeTodo, handleChange, changeClick}) {
  return (
    <li>
      {
        !todo.isEdit ? <span>{todo.text}</span> : <input type="text" placeholder="Edit a todo" onChange={handleChange} value={changeTodo} autoFocus='on'/>
      }
      <div className="li-in">
        {
          !todo.isEdit ? <Button style={'edit'} title={'Edit'} onClick={() => editTodo(todo.id)}/> : <Button style={'change'} title={"change"} onClick={() =>changeClick(todo.id)}/>
        }
        <Button style={'delete'} title={'Delete'} onClick={()=> deleteTodo(todo.id)}/>
      </div>
    </li>
  )
}

export default Todo