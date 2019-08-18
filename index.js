
function takeANumber(current, newInLine) {
  var array = []
  for (var i = 0; i < current.length; i++) {
    array.push(current[i] + newInLine[i]);
  }
  return array
}
