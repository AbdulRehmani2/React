import { ADD_COUNT } from "./countType"
import { DEC_COUNT } from "./countType"

export function addCount()
{
    return {
        type: ADD_COUNT
    }
}

export function decCount()
{
    return {
        type: DEC_COUNT
    }
}