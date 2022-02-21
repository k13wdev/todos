import { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './Form.module.css'
import { createTodo } from '../../redux/actions'

const Form = () => {
  const [inputTodo, setInputTodo] = useState({text: ''})
  const dispatch = useDispatch()  
  
  
  const onSubmitHandler = (event) => {
    event.preventDefault()
    
    const {text} = inputTodo
    if (text) {
      const newTodo = {
        text, id: Date.now().toString(), checked: false
      }
  
      dispatch(createTodo(newTodo))
      setInputTodo({text: ''})
    }
  }

  const onChangeHandler = (event) => {
    setInputTodo(prev => ({...prev, [event.target.name]: event.target.value}))
  }
  
  return (
    <form 
      className={style.form}  
      onSubmit={onSubmitHandler}
    >
      <span className={style.checkbox}></span>
      <input 
        id="text"
        name="text"        
        type="text"
        placeholder='Create a new todo...'
        onChange={onChangeHandler} 
        className={style.input}
        value={inputTodo.text}
      />
    </form>
  )
}

export default Form