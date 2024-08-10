const { isPalindrome } = require('../utils');

// Basic Palindromes
test('returns true for a palindrome word', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

// Non-Palindromes
test('returns false for a non-palindrome word', () => {
  expect(isPalindrome('car')).toBe(false);
});

  
