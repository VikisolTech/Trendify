export const validateInput = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; 
  if (!emailRegex.test(input) && !phoneRegex.test(input)) {
    return "Please enter a valid email or phone number";
  }
  return "";
};
// formValidator.js
export const validateRegistration = (formData) => {
  let errors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = "First name is required";
  }
  if (!formData.lastName.trim()) {
    errors.lastName = "Last name is required";
  }
  if (!formData.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required";
  }
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  return errors;
};

// otpValidator.js
export const validateOTP = (enteredOTP) => {
  const expectedOTP = '123456';
  if (enteredOTP === expectedOTP) {
    return { isValid: true, error: '' };
  } else {
    return { isValid: false, error: 'Please enter a valid code' };
  }
};
