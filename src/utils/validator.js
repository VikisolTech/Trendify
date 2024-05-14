export const validateInput = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; 
  if (!emailRegex.test(input) && !phoneRegex.test(input)) {
    return "Please enter a valid email or phone number";
  }
  return "";
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
  const expectedOTP = '123456';
  if (enteredOTP === expectedOTP) {
    return { isValid: true, error: '' };
  } else {
    return { isValid: false, error: 'Please enter a valid code' };
  }
};
