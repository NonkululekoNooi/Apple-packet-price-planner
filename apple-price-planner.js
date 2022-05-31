function apples(){
    var theBoxOfApple= 0;
    var theApples =0;
    var theNumberOfApples =0;
    var theApple =0

    var totalPerApple =0;
    var theProfit =0

    function setBoxOfApples(boxOfApple){
        theBoxOfApple = boxOfApple
    
    }
    function getBoxOfApples(){
            return theBoxOfApple
    }

    function setApples(apples){
        theApples = apples
    }
    function getApples(){
        return theApples
    }

    function setNumberOfApples(numberOfApples){
        theNumberOfApples = numberOfApples
    }
    function getNumberOfApples(){
        return theNumberOfApples
    }
    function setOneApple(perApple){
        theApple=perApple

    }
    function getOneApple(){
        return theApple
    }

    function getTotalOfApple(){
        totalPerApple += theApple
    }

 function getTotalOfOneApple(){
     return totalPerApple
 }
 function getTotalCost(){
    return totalPerApple 
    }

function setProfit(profits){
    theProfit = profits
  
}
function getProfit(){
    return theProfit - totalPerApple
}
    return{
       setBoxOfApples,
       getBoxOfApples,

       setApples,
       getApples,

       setNumberOfApples,
       getNumberOfApples,

      getTotalOfApple,
       getTotalOfOneApple,

       setOneApple,
       getOneApple,
       getTotalCost,
       setProfit,
       getProfit
    }
}