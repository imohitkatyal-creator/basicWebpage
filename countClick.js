
var clicks=0;

var box=document.getElementById('box');
console.log(box);
var clickCount=document.getElementById('click-count');
console.log(clickCount);

box.addEventListener("click",function(){
	clicks++;
	console.log(clicks);
	clickCount.innerText=clicks+" ";
});
