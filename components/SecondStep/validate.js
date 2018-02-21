const validate = values => {
  const errors = {};

  if (!values.birthdayDate) {
    errors.birthdayDate = 'Please provide a date.'
  } else if (isNaN(Number(values.birthdayDate))) {
    errors.birthdayDate = 'Date should be a number.'
  } else if (31 < Number(values.birthdayDate) || Number(values.birthdayDate) < 1) {
    errors.birthdayDate = 'Date should be between 1 and 31.'
  }

  if (!values.birthdayMonth) {
    errors.birthdayMonth = 'Please provide a month.'
  } else if (isNaN(Number(values.birthdayMonth))) {
    errors.birthdayMonth = 'Month should be a number.'
  } else if (12 < Number(values.birthdayMonth) || Number(values.birthdayMonth) < 1) {
    errors.birthdayMonth = 'Month should be between 1 and 12.'
  }

  if (!values.birthdayYear) {
    errors.birthdayYear = 'Please provide a year.'
  } else if (isNaN(Number(values.birthdayYear))) {
    errors.birthdayYear = 'Year should be a number.'
  }
  return errors
};

export default validate