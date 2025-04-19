// code your solution here
 function saturdayFun (paraValue='roller-skate') {
     return `This Saturday, I want to ${paraValue}!`
 }

 const mondayWork = function(paraValue='go to the office'){
   return `This Monday, I will ${paraValue}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }