const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please provide an email.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email is not a valid.'
  }

  if (!values.password) {
    errors.password = 'Please provide a password.'
  } else if (values.password.length < 6) {
    errors.password = 'Password should be minimum 6 characters long.'
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Please provide a password confirm.'
  } else if (values.passwordConfirm.length < 6) {
    errors.passwordConfirm = 'Password confirm should be minimum 6 characters long.'
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = 'Password confirm doesn`t equal password.'
  }
  return errors
};

export default validate