import { CREATE_TODO, DELETE_TODO, COMPLETE_TODO, DELETE_COMPLETE_TODO, TOGGLE_THEME } from './types'


export const createTodo = (newTodo) => {
  return {
    type: CREATE_TODO,
    payload: newTodo
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id
  }
}

export const deleteCompleteTodo = (completeTodos) => {
  return {
    type: DELETE_COMPLETE_TODO,
    payload: completeTodos
  }
}
 
export const toggleTheme = (newTheme) => {
  return {
    type: TOGGLE_THEME,
    payload: newTheme
  }
}