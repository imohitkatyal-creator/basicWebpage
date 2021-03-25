var toggled=false;
var h1tag=document.getElementsByTagName("h1")[0];
var bodyTag=document.getElementsByTagName("body")[0];
var button=document.getElementById('button');

document.getElementById('button').onclick=function(){
if(!toggled){

	h1tag.classList.add("color-white");
	bodyTag.classList.add("bck-color-black");
	button.style.marginLeft="110px";
	toggled=true;
}
else{
	h1tag.classList.remove("color-white");
	bodyTag.classList.remove("bck-color-black");
	button.style.marginLeft="1px";
	toggled=false;

}
}