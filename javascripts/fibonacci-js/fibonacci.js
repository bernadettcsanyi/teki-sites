function imageSlide(){
	var imageNr=Math.floor(Math.random() * 12) + 1;

	var image=document.getElementById("nature");
	image.src="../images/Fibonacci/" + imageNr + ".jpg";

	setTimeout("imageSlide()", 2500);
}

setTimeout("imageSlide()", 3000);


