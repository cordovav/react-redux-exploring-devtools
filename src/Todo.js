import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeOne, clearTodo } from './Features/todoSlice'

function Todo() {
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = items.map((item, index) => <li key={index} onClick={() => dispatch(removeOne(index))}>{item}</li>)
    const SubmitForm = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <form onSubmit={(e)=> SubmitForm(e)}>
                <input type='text' onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <ol>
                {renderItems}
            </ol>
            <button onClick={() => dispatch(clearTodo())}>Clear List</button>
        </div>
    )
}

export default Todo