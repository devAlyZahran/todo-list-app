import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const EditModal = ({ show, handleClose, todo, onSave }) => {

    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setCompleted(todo.completed)
        }
    }, [todo]);

    const handleSave = () => {
        const updatedTodo = { ...todo, title, completed };
        onSave(updatedTodo);
        handleClose();
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
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
          </Form.Group>

        </Form>
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
