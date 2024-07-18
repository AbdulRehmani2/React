import { ADD_SCOUNT, MIN_SCOUNT } from "./scountTypes";

type Action = {
    type: string
    payload: number
}

const initialState = {
    scount: 0
}

function sreducer(state = initialState, action: Action)
{
    switch (action.type)
    {
        case ADD_SCOUNT:
            return {
                ...state,
                scount: state.scount + action.payload
            }
        
        case MIN_SCOUNT:
            return {
                ...state,
                scount: state.scount - action.payload
            }
        
        default:
            return state
    }
}

export default sreducer