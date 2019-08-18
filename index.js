
function takeANumber(katzDeli, name) {
  var katzDeliLine = []
  names = ["Ada", "Grace", "Kent"]
  for (let i = 0; i < name.length; i++) {
    if (names[i] == name) {
      return `Welcome ${name[i]},
      You are ${i} in line`;
    }
  }
  return "you are not in our system";
}
