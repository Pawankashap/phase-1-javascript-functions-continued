// code your solution here
 function saturdayFun (paraValue='roller-skate') {
     return `This Saturday, I want to ${paraValue}!`
 }

 const mondayWork = function(paraValue='go to the office'){
   return `This Monday, I will ${paraValue}.`;
}

function wrapAdjective(paraValue1='*') {
    if (paraValue1==='*') {
           const innerFunction= function(paraValue='special') {
            return `You are ${paraValue1}a hard worker${paraValue1}!`
            }
            return innerFunction;
    }
    else if (paraValue1==='||'){
        const innerFunction= function(paraValue='special') {
            return `You are ${paraValue1}a dedicated programmer${paraValue1}!`
            }
            return innerFunction;
    }
}


