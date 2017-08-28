const isRotation = (str1, str2) => {
  if (str1.length === str2.length) {
    let str = str1 + str1;
    return str.includes(str2);
  }
  return false;
}; 

module.exports = isRotation;