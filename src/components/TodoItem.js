import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { MdDelete, MdEdit } from 'react-icons/md'

const TodoItem = ({todo, onDelete, onUpdate, onToggleCompleted}) => {

  return (
    <Container>
        <Row className='todo-item'>
            <Col className='text-center py-2' sm="2">
                <input type="checkbox" checked={todo.completed} onChange={() => onToggleCompleted(todo.id)} />
            </Col>
            <Col className='py-3' sm="7">
                <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
                </p>
            </Col>
            <Col className='py-2 text-center' sm="3">
                <Button className='btn-danger' onClick={()=>{onDelete(todo.id)}}>
                    <MdDelete />
                </Button>
                <Button className='btn-info btn-style' onClick={()=>{onUpdate(todo.id)}}>
                    <MdEdit />
                </Button>
            </Col>
        </Row>
    </Container>
  )
}

export default TodoItem
