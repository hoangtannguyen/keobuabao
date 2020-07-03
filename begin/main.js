let tracker = 'a'
const choices = ["icon-paper.svg","icon-scissors.svg","icon-rock.svg"];
// var src[0]="";
var UserPoints = 0;
var ComPoints = 0;

function score(){
	var score_div = document.getElementById("page-xtem").innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score, 50);

// function paper(){
//      let image = document.getElementById("icon-paper");
//      // image.src = "../images/icon-rock.svg";
//      if(tracker === 'a'){
//           image.src = "../images/icon-rock.svg";
//           tracker = 'b';
//      }else {
//           image.src = "../images/icon-paper.svg";
//           tracker = 'a';
//      }

// }


async function game(src,color){
     // debugger
     var box        = document.getElementById("you-win");
     var youchose   = document.getElementById("paper-xn");
     var random     = document.getElementById("sec-random");
     var pick       = document.getElementById("rock");
     var letpick    = document.getElementById("let-pick");
     let scissors   = document.getElementById("scissors");

     youchose.style.borderColor    = color;
     scissors.style.borderColor    = color;
     youchose.src                  = src;
     scissors.src                  = src;
     random.style.display          = "block";
     letpick.style.display         = "none";
     pick.style.display            = "block";
     wait(src);
     
     
}

function rand(ms){
     return new Promise(resolve=>setTimeout(resolve, ms));
}

async function wait(abc) {
     var box        = document.getElementById("you-win");
     var youchose   = document.getElementById("paper-xn");
     var random     = document.getElementById("sec-random");
     var pick       = document.getElementById("rock");
     var letpick    = document.getElementById("let-pick");
     var src = "";
     let i =100;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     run();
     i += 5;
     await rand(i);
     src = run();
     document.getElementById("rock-xn").src = src[0];
     document.getElementById("rock-xn").style.borderColor = src[1];
     random.style.display = "none";
     box.style.display = "block";
     
     console.log(abc.split("images/")[1],src[0].split("images/")[1]);
     abc = abc.split("images/")[1];
     src[0] = src[0].split("images/")[1];
     if(abc === choices[0] && src[0]  === choices[2] || abc === choices[2] && src[0] === choices[1] || abc === choices[1] && src[0] === choices[0]){
		win(src);
	}
	else if(abc === src[0]){
		draw(src);
	}
	else{
		lose(src);
	}
}

function run(pick,src){
     
     var src = ["../images/icon-scissors.svg","../images/icon-rock.svg","../images/icon-paper.svg"];
     var color = ["hsl(39, 89%, 49%)","hsl(349, 70%, 56%)","hsl(230, 89%, 62%)"];
     var pick       = document.getElementById("rock");
     let j = Math.round(Math.random()*2);
     pick.src = src[j];
     pick.style.borderColor = color[j];
     return [src[j], color[j]];
}

function playAgain(){
     
     var box        = document.getElementById("you-win");
     var youchose   = document.getElementById("paper-xn");
     var random     = document.getElementById("sec-random");
     var pick       = document.getElementById("rock");
     var letpick    = document.getElementById("let-pick");
     let scissors   = document.getElementById("scissors");
     random.style.display = "block";
     box.style.display = "none";
     random.style.display          = "none";
     letpick.style.display         = "block";
     pick.style.display            = "none";

}

function win(){
	UserPoints++;
     document.getElementById("win-bot").style.display= 'none';
    document.getElementById("who").innerHTML = "YOU WIN!";
    document.getElementById("win-w").style.display= 'block';
}
function draw(){
     document.getElementById("win-bot").style.display= 'none';
     document.getElementById("win-w").style.display= 'none';
	document.getElementById("who").innerHTML = "It's a Draw.";
     var bn = document.getElementById(bn);
}
function lose(){
	ComPoints++;
     document.getElementById("who").innerHTML = "YOU LOSE!";
     document.getElementById("win-bot").style.display= 'block';
     document.getElementById("win-w").style.display= 'none';
}