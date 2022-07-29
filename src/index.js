module.exports = function check(str, bracketsConfig) {
  let array = str.split('')

  const checkdeBrackets = array => { 
    for(let i = 0; i < array.length; i++) {
      for(let y = 0; y < bracketsConfig.length; y++) {
        if(array[i] === bracketsConfig[y][0] && array[i + 1] === bracketsConfig[y][1]) {
          array.splice(i, 2)
          checkdeBrackets(array)
        }
      }
    }
  }
  checkdeBrackets(array)
  if(array.length !== 0) {
  return false
  } else {
    return true
  }
}
