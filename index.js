var buttonInnerHTML;

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
 document.querySelectorAll(".drum")[i].addEventListener("click", function (){
  buttonInnerHTML= this.innerHTML;
  console.log(buttonInnerHTML);
  playSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event){
 buttonInnerHTML= this.innerHTML;
 playSound(event.key);
 buttonAnimation(event.key);
});

function playSound(key){
 switch(key){
  case "w": var crash= new Audio('sounds\\crash.mp3');
  crash.play();
  break;

  case "a": var kick_bass= new Audio('sounds\\kick-bass.mp3');
  kick_bass.play();
  break;

  case "s": var snare= new Audio('sounds\\snare.mp3');
  snare.play();
  break;

  case "d": var tom1= new Audio('sounds\\tom-1.mp3');
  tom1.play();
  break;

  case "j": var tom2= new Audio('sounds\\tom-2.mp3');
  tom2.play();
  break;

  case "k": var tom3= new Audio('sounds\\tom-3.mp3');
  tom3.play();
  break;

  case "l": var tom4= new Audio('sounds\\tom-4.mp3');
  tom4.play();
  break;

  default: console.log(key); 
}
}

function buttonAnimation(currentkey){

 var active= document.querySelector("." + currentkey);
 active.classList.add("pressed");

 setTimeout(function(){active.classList.remove("pressed")},100);

}