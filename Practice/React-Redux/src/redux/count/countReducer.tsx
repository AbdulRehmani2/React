import { ADD_COUNT } from './countType'
import { DEC_COUNT } from './countType'

type actionType = {
  type: string,
}

const initialState = {
  count: 0
}

function countReducer(state = initialState, action:actionType) {
  switch(action.type)
  {
    case ADD_COUNT: 
      return {
        ...state,
        count: state.count + 1
      }
      
    case DEC_COUNT:
      return{
        ...state,
        count: state.count - 1
      }

    default:
      return state
  }
}

export default countReducer