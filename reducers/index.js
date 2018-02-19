import { combineReducers } from 'redux'
import { combineForms, createForms } from 'react-redux-form'

import auth, {initialFirstStepState, initialSecondStepState} from './auth'


export default combineReducers({
  auth,
  ...createForms({
    firstStep: initialFirstStepState,
    secondStep: initialSecondStepState
  })
});