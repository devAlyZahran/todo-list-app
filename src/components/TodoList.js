import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, onEdit, deleteOneItem, onToggleCompleted}) => {

  //const [allData, setAllData] = useState([])
  //const [loading, setLoading] = useState(true)
  //const [error, setError] = useState(null)

  const handleDelete = (id) =>{
    if (todos.length >= 1) {
      const del = window.confirm("do you want to confirm this item?")
      if (del) {
        const index = todos.findIndex((item) => item.id === id);
        todos.splice(index, 1);
        deleteOneItem(todos)
      }
    }
  }

  return (
    <div>
      {
        todos.length >= 1 ? (
          todos.map((item, index) =>{
            return(
              <TodoItem key={index} todo={item} onUpdate={onEdit} onDelete={handleDelete} onToggleCompleted={onToggleCompleted}/>
            )
          })
        ) : (<h4 className='text-center'>There's no data to be displayed :(</h4>) 
      }
    </div>
  )
}

export default TodoList
