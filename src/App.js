import { Col, Container, Row } from "react-bootstrap";
import {fetchTodos} from './Apis'
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import EditModal from "./components/EditModal";

function App() {

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(()=>{
    fetchTodos().then(response => {
      setTodos(response.data)
      setLoading(false)
    })
    .catch(()=>{
      setError('Failed to load items')
    })
  }, [])

  const handleAdd = () =>{
    setTodos([...todos])
  }

  const deleteOneItem = (data) =>{
    setTodos([...data])
  }

  const handleUpdate = (id) => {
    const todo = todos.find(item => item.id === id);
    setCurrentTodo(todo);
    setShowModal(true);
  };

  const handleSave = (updatedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const handleToggleCompleted = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return (
    <Container className="App">
      <Row className="text-center">
        <h2>ToDo List App</h2>
      </Row>

      <Row>
        <Col sm="6" className="m-auto">
          <TodoForm onAdd={handleAdd} items={todos} />
        </Col>
      </Row>

      <Row>
        <Col sm="6" className="m-auto">
          <TodoList todos={todos} onEdit={handleUpdate} deleteOneItem={deleteOneItem} onToggleCompleted={handleToggleCompleted} />
        </Col>
      </Row>

      <EditModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        todo={currentTodo}
        onSave={handleSave}
      />

    </Container>
  );
}

export default App;
