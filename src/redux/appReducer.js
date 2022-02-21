import { TOGGLE_THEME } from "./types"

const initialState = {
  theme: 'light'
}

const appReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case TOGGLE_THEME:
      return {...state, theme: action.payload} 
    default: return state
  }
  

}

export default appReducer