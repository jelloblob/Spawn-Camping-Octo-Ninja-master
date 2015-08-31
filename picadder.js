function addTheImage() {
	var img = document.createElement('img');
	img.src =  "Silver.png";
	document.bodyappendChild(img);
	setTimeout(function(){document.body.removeChild(img);},1000);

}
