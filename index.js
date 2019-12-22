const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
let res = arr.find(s => s.result=='W')
return !!res? res.year :undefined
  
}