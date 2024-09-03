import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const EditModal = ({ show, handleClose, todo, onSave }) => {

    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);
    const [hidden, setHidden] = useState(true)
    const [error, setError] = useState(null)

    const inptVal = useRef()

    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setCompleted(todo.completed)
            setHidden(todo.title.length > 0)
        }
    }, [todo]);

    const handleSave = () => {
      if (inptVal.current.value !== '') {
        const updatedTodo = { ...todo, title, completed };
        onSave(updatedTodo);
        handleClose();
      }
      else{
        setHidden(false)
        setError('the title must contain data')
      }
    };

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Todo Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
          <Form.Group controlId="formTodoCompleted" className="mt-3">
            <Form.Check
              type="checkbox"
              label="Completed"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </Form.Group>
          <Form.Group controlId="formTodoTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              ref={inptVal}
              onChange={(e) => {
                setTitle(e.target.value)
                setHidden(e.target.value.length > 0)
              }}
              placeholder="Enter title"
            />
          </Form.Group>

        </Form>
        <p style={{color: 'red'}} hidden={hidden}>{error}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditModal
