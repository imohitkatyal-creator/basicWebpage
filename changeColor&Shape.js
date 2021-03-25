var Color=document.getElementById('container');
var Shape=document.getElementById('shape');
var cur="circle";
function randomClass(){
	var classes=['circle','triangle','oval','square'];
	var size=classes.length;
	var className=classes[Math.floor(Math.random()*size)];
	document.getElementsByClassName(cur)[0].setAttribute("class",className);
	cur=className;

}
document.getElementById('changeShape').onclick=function(){
	
	randomClass();
}
function randomColor(){
	var x=Math.floor(Math.random()*256);
	var y=Math.floor(Math.random()*256);
	var z=Math.floor(Math.random()*256);
	var bgcolor="rgb("+x+","+y+","+z+")";

	container.style.backgroundColor=bgcolor;
	console.log(bgcolor);

}
document.getElementById('changeColor').onclick=function(){
container.classList.remove('container-color');
	randomColor();
}
