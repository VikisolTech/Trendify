export const validateInput = (email) => {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Email can't be empty.";
  if (!re.test(email)) return 'Ooops! We need a valid email address.';
  return '';
};




export function nameValidator(value) {
  if (!value.trim()) {
    return "This field is required";
  }
  return "";
}

export function phoneValidator(value) {
  if (!value.trim()) {
    return "Phone number is required";
  }
  if (!/^\d+$/.test(value.trim())) {
    return "Phone number should contain only digits";
  }
  return "";
}

export function emailValidator(value) {
  if (!value.trim()) {
    return "Email is required";
  }
  if (!/\S+@\S+\.\S+/.test(value.trim())) {
    return "Email is not valid";
  }
  return "";
}


export const validateOTP = (enteredOTP) => {
 
  if (enteredOTP.length == 6) {

    return { isValid: true, error: '' };
  } else {
    return { isValid: false, error: 'Please enter a valid code' };
  }
};
