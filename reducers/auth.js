import {
  FIRST_STEP_REQUEST,
  SECOND_STEP_REQUEST
} from '../constants/auth'


export const initialState = {
  email: '',
  password: '',
  dateOfBirth: '',
  gender: '',
  howHearAboutUs: '',
  isRegister: false
};

export const initialFirstStepState = {
  email: '',
  password: '',
  passwordConfirm: ''
};

export const initialSecondStepState = {
  birthdayDate: '',
  birthdayMonth: '',
  birthdayYear: '',
  gender: '',
  howHearAboutUs: ''
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case FIRST_STEP_REQUEST:
      return {...state, ...action.payload};
    case SECOND_STEP_REQUEST:
      let dateOfBirth = new Date(
        action.payload.birthdayYear,
        action.payload.birthdayMonth,
        action.payload.birthdayDate
      ).getTime();
      return {...state, ...action.payload, dateOfBirth: dateOfBirth, isRegister: true};
    default:
      return state
  }
}
