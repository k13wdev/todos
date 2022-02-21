import { useDispatch } from 'react-redux'
import cross from '../../assets/icon-cross.svg'
import { deleteTodo, completeTodo } from '../../redux/actions'
import style from './Todo.module.css'

const Todo = ({todo}) => {
  const dispatch = useDispatch()

  const { id } = todo

  const deleteHandler = (event) => {
    event.preventDefault()
    dispatch(deleteTodo(id))
  }

  const completeHandler = (event) => {
    dispatch(completeTodo(id))
  }

  return (
    <div className={style.wrapper} id={todo.id}>
      <label>
        <input type="checkbox" onChange={completeHandler}/>
        <span className={style.checkbox}></span>
      </label>
      <p className={style.text}>{todo.text}</p>
      <button type="button" className={style.button} onClick={deleteHandler}>
        <img src={cross} width={14} height={14} alt="delete todo"/>
      </button>
    </div>
  )
}

export default Todo