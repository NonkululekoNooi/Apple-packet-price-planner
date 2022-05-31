function apples(){
    var theBoxOfApple= 0
    var theApples =0
    var theNumberOfApples

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



    return{
       setBoxOfApples,
       getBoxOfApples,

       setApples,
       getApples,

       setNumberOfApples,
       getNumberOfApples,
       
    }
}