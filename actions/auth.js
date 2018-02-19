import {
  FIRST_STEP_REQUEST,
  SECOND_STEP_REQUEST
} from '../constants/auth'

export function firstStep(data) {
  return {
    type: FIRST_STEP_REQUEST,
    payload: data
  }
}
export function secondStep(data) {
  return {
    type: SECOND_STEP_REQUEST,
    payload: data
  }
}