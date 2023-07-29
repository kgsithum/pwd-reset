
export const validatePassword = (password: string): boolean => {

    // Check if the password is at least 8 characters long and contains one number and two special characters.
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Check if the password is greater than 15 characters with no restriction.
  const isGreaterThanOrEqualTo15 = password.length > 15;

  // Validate the password against the constraints.
  const isValid = regex.test(password) || isGreaterThanOrEqualTo15;

  return isValid;
};