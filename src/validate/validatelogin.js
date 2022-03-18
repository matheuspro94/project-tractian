function validateEmail(email) {
  const regex = /.+@.+[.].+/gm;
  const isValid = regex.test(email);
  if (isValid) {
    return true;
  }
  return false;
}

export default validateEmail;
