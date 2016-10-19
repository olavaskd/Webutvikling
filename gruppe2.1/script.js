window.onload=run;

function run(){
	openMeny();
	sluttMeny();
}

function openMeny(){
document.getElementById("burger").onclick = meny;
}
function meny(){

document.getElementById("links").style.display ="flex";
document.getElementById("burger").style.display="none";
document.getElementById("close").style.display="flex";
}
function sluttMeny(){
	document.getElementById("close").onclick = slutt;
}
function slutt(){
document.getElementById("links").style.display ="none";
document.getElementById("burger").style.display ="flex";
}