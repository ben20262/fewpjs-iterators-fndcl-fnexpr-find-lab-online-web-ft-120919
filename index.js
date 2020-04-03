const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(superArray) {
  let win = superArray.find(function(w) {
    return w.result === 'W'
  })
  return !!win ? win.year : win
}