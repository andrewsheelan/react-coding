import React from 'react'
import { Form } from 'react-bootstrap'

export default function Todo({id, text, completed, todoToggled}) {
    const setTodoToggled = () => {
        todoToggled(id)
    }
    return (
        <div>
            <Form.Check label={text} checked={completed} onChange={setTodoToggled} />
        </div>
    )
}
