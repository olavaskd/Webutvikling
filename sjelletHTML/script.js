window.onload=run;

var slide = 1;
var n = 1;

function run(){
	openMeny();
	sluttMeny();
	/*document.getElementById("next").onclick = next;
	document.getElementById("prev").onclick = previous;
	slideshow(1);*/
	var slides = document.querySelectorAll('#slides .slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide,5000);

    function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
}
/*
      function next() {
        forward(1);
      }

      function previous() {
        forward(-1);
      }

      function forward(n) {
        slideshow(slide += n);
      }

      function slideshow(n) {
        var i;
        var project = document.getElementsByClassName("projects");
        var dots = document.getElementsByClassName("dot");

        for (i = 0; i < project.length; i++) {
            project[i].style.display = "none";
        }

        if (n > project.length) {
          slide = 1;
        }
        if (n < 1) {
          slide = project.length;
        }
          project[slide-1].style.display = "block";
      }
*/
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
