import React, { useRef, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const TodoForm = ({onAdd, items}) => {

    //const [hidden, setHidden] = useState(true)
    const [error, setError] = useState('')
    const inptVal = useRef()

    const AddItem = () => {
        if(inptVal.current.value !== ''){
            items.push({userId:1, id: Math.random(), title: inptVal.current.value, completed: false})
            inptVal.current.value = ''
            onAdd();
        }
        else{
            //setHidden(false)
            setError('title must contain value')
            //console.log(error)
            alert(error)
        }
    }

  return (
    <Row className='my-3 form-style'>
        <Col sm='10' className='float-left'>
            <input ref={inptVal} type='text' placeholder='enter title' className='w-100 inpt' />
        </Col>
        <Col sm='2'>
            <Button onClick={AddItem} className='btn-success'>Add</Button>
        </Col>
    </Row>
  )
}

export default TodoForm
