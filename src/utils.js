function isPalindrome(word) {
  if (typeof word !== 'string') {
    throw new Error('Input must be a string');
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error('Input must only contain alphabetic characters');
  }
  const cleanedWord = word.toLowerCase();
  return cleanedWord === cleanedWord.split('').reverse().join('');
}

module.exports = { isPalindrome };

