import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from '../../components/Todo/Todo'
import { deleteCompleteTodo } from '../../redux/actions'
import style from './Todos.module.css'

const Todos = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => {
    const {todoReducer} = state
    return todoReducer.todos
  })

  const [itemsLeft, setItmesLeft] = useState('0')

  useEffect(() => {
    setItmesLeft(todos.filter(todo => !todo.checked).length)
  }, [todos])

  const clickHandler = () => {
    const completedTodos = todos.filter(todo => todo.checked === true)
    dispatch(deleteCompleteTodo(completedTodos))
  }

  return (
    <div className={style.wrapper}>
      <fieldset className={style.list}>
        <legend className={style.title}>Todos:</legend>
        {todos.map((todo) => <Todo todo={todo} key={todo.id}/>)}
      </fieldset>
      <div>
        <span>{itemsLeft} items left</span>
        <button type="button" className={style.button} onClick={clickHandler}>Clear Completed</button>
      </div>   
    </div>
  )
}

export default Todos