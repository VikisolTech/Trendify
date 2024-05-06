export const validateInput = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; 
  if (!emailRegex.test(input) && !phoneRegex.test(input)) {
    return "Please enter a valid email or phone number";
  }
  return "";
};
