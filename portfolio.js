var aboutMe = document.querySelector("#aboutMe");
var aboutMeButton = document.querySelectorAll(".aboutMeButton");
var projects = document.querySelector("#projects");
var projectsButton = document.querySelectorAll(".projectsButton");
var contactMeButton = document.querySelectorAll(".contactMeButton");

aboutMe.addEventListener("mouseover",function(){
	aboutMe.style.opacity = 1;
});

aboutMe.addEventListener("mouseout",function(){
	aboutMe.style.opacity = 0.4;
});

projects.addEventListener("mouseover",function(){
	projects.style.opacity = 1;
});
		
projects.addEventListener("mouseout",function(){
	projects.style.opacity = 0.4;
});

for(var i = 0; i < aboutMeButton.length; i++){
	aboutMeButton[i].addEventListener("click", function(){
		aboutMe.style.opacity = 0.4;
	});
}

for(var i = 0; i < projectsButton.length; i++){
	projectsButton[i].addEventListener("click", function(){
		projects.style.opacity = 0.4;	
	});
}

