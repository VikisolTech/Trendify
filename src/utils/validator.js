export const validateInput = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; // Adjust the phone number regex according to your requirements
  if (!emailRegex.test(input) && !phoneRegex.test(input)) {
    return "Please enter a valid email or phone number";
  }
  return "";
};
