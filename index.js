const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record){
let r=record.find(record=>record.result==="W");
if(r === undefined)
{
 return r
}
else{
  return r.year
  
}
}