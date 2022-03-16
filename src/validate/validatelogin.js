function validateEmail(email) {
  const regex = new RegExp('.+@.+[.].+', 'gm');
  const isValid = regex.test(email);
  if (isValid) {
    return true;
  }
  return false;
}

export default validateEmail;