import { CREATE_TODO, DELETE_TODO, COMPLETE_TODO, DELETE_COMPLETE_TODO } from "./types"

const initialState = {
  todos: []
}

const todoReducer = (state = initialState, action) => {
  
  const {payload} = action
  const {todos} = state

  switch (action.type) {
    case CREATE_TODO:
      return {...state, todos: [...state.todos, action.payload]}
    case DELETE_TODO:
      const newTodos = todos.filter(todo => todo.id !== payload)
      return {...state, todos: newTodos}
    case COMPLETE_TODO:
      const completeTodo = todos.filter(todo => {
        if (todo.id === payload && todo.checked === false) {
          todo.checked = true
        } else if (todo.id === payload && todo.checked === true) {
          todo.checked = false
        }
      })
      return {...state, todos: [...state.todos, ...completeTodo]}
    case DELETE_COMPLETE_TODO:
      return {...state, todos: [...state.todos.filter(todo => !action.payload.includes(todo))]}
    default: return state
  }
  

}

export default todoReducer