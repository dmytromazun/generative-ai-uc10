const regexValidation = (string, maxLength) => {
  const regex = new RegExp(
    '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&\'()*+,-./:;<=>?@\\[\\]^_`{|}~])[^\\s]{1,' +
      maxLength +
      '}$'
  )
  return regex.test(string)
}

// Custom testing function
export const testRegexValidation = () => {
  const testCases = [
    // Test valid inputs
    { input: 'Abc123!@#', maxLength: 10, expected: true },
    { input: 'aBc123!@#', maxLength: 10, expected: true },
    { input: 'Aa1!', maxLength: 4, expected: true },

    // Test invalid inputs
    { input: '', maxLength: 10, expected: false }, // Empty string
    { input: 'Abc123!@#', maxLength: 5, expected: false }, // Too short input
    { input: 'AAAAAAAAAAAAAAAAAAA', maxLength: 10, expected: false }, // Too long input

    // Missing character types
    { input: 'abc123!@#', maxLength: 10, expected: false }, // Missing uppercase letter
    { input: 'ABC123!@#', maxLength: 10, expected: false }, // Missing lowercase letter
    { input: 'Abcdefg123', maxLength: 10, expected: false }, // Missing special character
    { input: 'Abc!@#$', maxLength: 10, expected: false }, // Missing digit

    // Excess whitespace characters
    { input: '  Abc123!@#  ', maxLength: 10, expected: false }, // Leading and trailing whitespace
    { input: 'Abc  123!@#', maxLength: 10, expected: false }, // Whitespace in the middle
    { input: '  Abc 123!@#  ', maxLength: 10, expected: false }, // Whitespace everywhere
  ]

  console.log('Running tests for regexValidation function:')
  testCases.forEach((testCase, index) => {
    const { input, maxLength, expected } = testCase
    const result = regexValidation(input, maxLength)
    console.log(
      `Test case ${index + 1}: ${result === expected ? 'PASSED' : 'FAILED'}`
    )
  })
}
