export const regexValidation = (string, maxLength) => {
  const regex = new RegExp(
    '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&\'()*+,-./:;<=>?@\\[\\]^_`{|}~])[^\\s]{1,' +
      maxLength +
      '}$'
  )
  return regex.test(string)
}
