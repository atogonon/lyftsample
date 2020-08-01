// Function i used to create 'return_string'
// Exporting it from this separate file to keep main.js clean

function newString(string) {
  let result=''
  for (let i=2; i<string.length; i+=3) {
    result+=string[i]
  }
  return result
}

module.exports = newString
