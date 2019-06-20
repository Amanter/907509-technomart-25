var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".modal_map");
var mapClose = mapPopup.querySelector(".close");

mapOpen.addEventListener("click",function(event){ 
	event.preventDefault();
  mapPopup.style.top = "50%";
});


mapClose.addEventListener("click",function(event){
	event.preventDefault();
	mapPopup.style.top = "-446px";
});

window.addEventListener("keydown",function(event){
	if (event.keyCode === 27){
		if (mapPopup.classList.contains("content_show")){
			mapPopup.classList.remove("content_show")
		}
	}
});

var link = document.querySelector(".link_js");
var popup = document.querySelector(".backending_form");
var close = popup.querySelector(".close");
var myname = document.querySelector("[name=name]");

close.addEventListener("click",function(event){
	event.preventDefault();
	popup.style.top = "-420px";
});

link.addEventListener("click",function(event){
	event.preventDefault();
	// popup.classList.add("content_show");
	popup.style.top = "50%";
});

close.addEventListener("click",function(event){
	event.preventDefault();
	popup.classList.remove("content_show")
});

window.addEventListener("keydown",function(event){
	if (event.keyCode === 27){
		if (popup.classList.contains("content_show")){
			popup.classList.remove("content_show")
		}
	}
});

function show_add(){
  add = document.querySelector(".add");
  add.style.top = "50%";
  // add.style.display="block";
  return false;
}
function close_add(){
  add = document.querySelector(".add");
  add.style.top = "-144px";
  // add.style.display="none";
  return false;
}


