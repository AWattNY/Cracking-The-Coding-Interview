const isPermutationOfPalindrome = (string) => {
  let charCount = {
    even: 0,
    odd: 0
  }; 
  for (var i = 0; i < string.length; i++) {
    const currentChar = string.charAt(i);
    if (!charCount[currentChar]) {
      charCount[currentChar] = 1;  	
    } else {
      charCount[currentChar]++;	
    }
    if (charCount[currentChar] % 2 === 0) {
      charCount['even']++;
      charCount['odd'] = Math.max(0, charCount['odd'] - 1);
    } else {
      charCount['odd']++;
      charCount['even'] = Math.max(0, charCount['even'] - 1);
    }
  }
  return charCount['odd'] <= 1; 
};

module.exports = isPermutationOfPalindrome;