// var str1="Drum ";
// var str2= " clicked";
var x= document.querySelectorAll(".drum");
for(var i=0;i<x.length;i++)
{
    x[i].addEventListener("click",function(){
        
        var innerHTMLbutton= this.innerHTML;

        makeSound(innerHTMLbutton);
        addAnimation(innerHTMLbutton);      
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimation(event.key);
});

function makeSound(val)
{
    switch(val)
        {
            case "w":
                var sound=new Audio("sounds/crash.mp3");
                sound.play();
                break;
           
            case "a":
                var sound=new Audio("sounds/kick-bass.mp3");
                sound.play();
                break;
                    
            case "s":
                var sound=new Audio("sounds/snare.mp3");
                sound.play();
                break;
                
            case "d":
                var sound=new Audio("sounds/tom-1.mp3");
                sound.play();
                break;
            case "j":
                var sound=new Audio("sounds/tom-2.mp3");
                sound.play();
                break;
                
            case "k":
                var sound=new Audio("sounds/tom-3.mp3");
                sound.play();
                break;
                
            case "l":
                var sound=new Audio("sounds/tom-4.mp3");
                sound.play();
                break;
        }
}

function addAnimation(curKey)
{
    var x= document.querySelector("."+curKey);
    x.classList.add("pressed");

    setTimeout(function(){x.classList.remove("pressed");},100);
}


// alert("BE READY");

// var x= document.querySelectorAll(".drum");

// for(let i=0;i<x.length;i++)
// {
//     x[i].addEventListener("click",function(){
//         var innerHTMLbutton= this.innerHTML;
//         makeSound(innerHTMLbutton);
//         addAnimation(innerHTMLbutton);
//     });
// }
// document.addEventListener("keypress",function(event){
//     makeSound(event.key);
//     addAnimation(event.key);
// });

// function makeSound(ch)
// {
//     switch(ch)
//         {
//             case "w":
//                 var sound=new Audio("sounds/crash.mp3");
//                 sound.play();
//                 break;
           
//             case "a":
//                 var sound=new Audio("sounds/kick-bass.mp3");
//                 sound.play();
//                 break;
                    
//             case "s":
//                 var sound=new Audio("sounds/snare.mp3");
//                 sound.play();
//                 break;
                
//             case "d":
//                 var sound=new Audio("sounds/tom-1.mp3");
//                 sound.play();
//                 break;
//             case "j":
//                 var sound=new Audio("sounds/tom-2.mp3");
//                 sound.play();
//                 break;
                
//             case "k":
//                 var sound=new Audio("sounds/tom-3.mp3");
//                 sound.play();
//                 break;
                
//             case "l":
//                 var sound=new Audio("sounds/tom-4.mp3");
//                 sound.play();
//                 break;
//         }
// }

// function addAnimation(ch)
// {
//     var x= document.querySelector("."+ch);
//     x.classList.add("pressed");

//     setTimeout(function(){x.classList.remove("pressed");},100);
// }

alert("Are you Ready?")
alert("Okay, cool!")
alert("Now, Play the Drums!")