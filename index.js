const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
let o=record.find(record => record.result === "W");

if(o === undefined)
{
  return o
}
else{return o.year}

}

