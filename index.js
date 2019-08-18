function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
  }
//passed
function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return "There is nobody waiting to be served!"
  } else {
    var firstInLine = katzDeliLine.shift()
    return "Currently serving " + firstInLine + ".";
  }
}
