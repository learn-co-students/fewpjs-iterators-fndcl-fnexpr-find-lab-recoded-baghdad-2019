/*
function superbowlWin(obj){
 for (event of obj){
   if (event.result == 'W') {
        return event.year
        }
 }
}

superbowlWin(record)
*/

let record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(obj){
  let winner = obj.find(res => res.result == 'W')
  if (winner){
    return winner.year
  } else {
    return undefined
  }
}

// winner = record.find(superbowlWin)