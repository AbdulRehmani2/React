import { ADD_SCOUNT, MIN_SCOUNT } from "./scountTypes";

export function addSCount(number = 1)
{
    return {
        type: ADD_SCOUNT,
        payload: number
    }
}

export function minSCount(number = 1)
{
    return {
        type: MIN_SCOUNT,
        payload: number
    }
}