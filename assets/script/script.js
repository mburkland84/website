var slideIndex=1;
showDivs(slideIndex);

function nextSlide(n) {
	showPhoto(slideIndex += n);
}

function showPhoto(n) {
	var k;
	var cur= document.getElementsByClassName("slide");
	if (n > cur.length){ slideIndex=1}
	if (n < 1) {slideIndex=cur.length}
	for(k=0; k<cur.length; k++){
		cur[k].style.display="none";
	}
	cur[slideIndex-1].style.display="block";
}