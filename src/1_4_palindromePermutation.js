const isPermutationOfPalindrome = (string) => {
  let charCount = {};
  let odd = 0; 
  for (var i = 0; i < string.length; i++) {
    const currentChar = string.charAt(i);
    if (!charCount[currentChar]) {
      charCount[currentChar] = 1;  	
    } else {
      charCount[currentChar]++;	
    }
    if (charCount[currentChar] % 2 === 0) {
      odd--;
    } else {
      odd++;
    }
  }
  return odd <= 1; 
};

module.exports = isPermutationOfPalindrome;