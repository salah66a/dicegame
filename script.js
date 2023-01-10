function result(){
    var randomNumber= Math.random()*6
    var result = Math.floor(1+ randomNumber)
    return result;
}

var playerOne = document.getElementById("result1");
var playerTwo = document.getElementById("result2");
var resultOne = result();
var resultTwo = result();

document.getElementById("btn1").addEventListener("click", function(){
 playerOne.innerHTML= resultOne
})
document.getElementById("btn2").addEventListener("click", function(){
  playerTwo.innerHTML= resultTwo
  
})
console.log(resultOne)
console.log(resultTwo)
  var finalResult = document.getElementById("final-result");
  var note1 = document.getElementById("note1");
  var note2 = document.getElementById("note2");
 
document.getElementById("btn2").addEventListener("click", function(){
    if (resultOne == resultTwo){
        finalResult.innerHTML= "DROW ...";
        note.innerHTML = ""
        
    }else if(resultOne > resultTwo)
      {
          finalResult.innerHTML= "THE WINNER IS: PLAYER ONE";
          note1.innerHTML = "Congratulations"
          note2.innerHTML = "GoodLuck"
      } else {
          finalResult.innerHTML= "THE WINNER IS: PLAYER TWO";
          note2.innerHTML = "Congratulations"
          note1.innerHTML = "GoodLuck"
          
          
      }
}
  )
