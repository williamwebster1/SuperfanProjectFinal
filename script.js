
var audio = document.getElementById("you-win");
function onClick() {
	audio.play();
}
function changeBackground(){
	document.getElementById("car-model").classList.add("red");
	document.getElementById("car-model").classList.remove("lightblue");
	document.getElementById("disc1").classList.add("red");
	document.getElementById("disc1").classList.remove("lightblue");
	document.getElementById("hist1").classList.add("red");
	document.getElementById("hist1").classList.remove("lightblue");
}
function changeBackground2(){
	document.getElementById("car-model").classList.add("lightblue");
	document.getElementById("car-model").classList.remove("red");
	document.getElementById("disc1").classList.add("lightblue");
	document.getElementById("disc1").classList.remove("red");
	document.getElementById("hist1").classList.add("lightblue");
	document.getElementById("hist1").classList.remove("red");
}

var imagesArray = ["images/db10.jpg","images/db11.jpg","images/dbz.jpg","images/lagonda.jpg","images/vantage.jpg","images/vanquish.jpg"];

function displayImage(el){
var num = Math.floor(Math.random()*6);
el.src = imagesArray[num];
console.log(el.src);
console.log(num);
	if(num==0){
		document.getElementById("discdb11").classList.add("hide");
		document.getElementById("discdbz").classList.add("hide");
		document.getElementById("disclagonda").classList.add("hide");
		document.getElementById("discvantage").classList.add("hide");
		document.getElementById("disc1").classList.add("hide");
		document.getElementById("discdb10").classList.remove("hide");
		document.getElementById("car-modeldb11").classList.add("hide");
		document.getElementById("car-modeldbz").classList.add("hide");
		document.getElementById("car-modeldblagonda").classList.add("hide");
		document.getElementById("car-modelvantage").classList.add("hide");
		document.getElementById("car-modelvanquish").classList.add("hide");
		document.getElementById("car-modeldb10").classList.remove("hide");
		document.getElementById("car-model").classList.add("hide");
		document.getElementById("hist1").classList.add("hide");
		document.getElementById("histdb11").classList.add("hide");
		document.getElementById("histdbz").classList.add("hide");
		document.getElementById("histlagonda").classList.add("hide");
		document.getElementById("histvantage").classList.add("hide");
		document.getElementById("histvanquish").classList.add("hide");
		document.getElementById("histdb10").classList.remove("hide");
		console.log(1);
	}
	else if(num==1){
		document.getElementById("discdb10").classList.add("hide");
		document.getElementById("discdbz").classList.add("hide");
		document.getElementById("disclagonda").classList.add("hide");
		document.getElementById("discvantage").classList.add("hide");
		document.getElementById("disc1").classList.add("hide");
		document.getElementById("discdb11").classList.remove("hide");
		document.getElementById("car-modeldb10").classList.add("hide");
		document.getElementById("car-modeldbz").classList.add("hide");
		document.getElementById("car-modeldblagonda").classList.add("hide");
		document.getElementById("car-modelvantage").classList.add("hide");
		document.getElementById("car-modelvanquish").classList.add("hide");
		document.getElementById("car-modeldb11").classList.remove("hide");
		document.getElementById("car-model").classList.add("hide");
		document.getElementById("hist1").classList.add("hide");
		document.getElementById("histdb10").classList.add("hide");
		document.getElementById("histdbz").classList.add("hide");
		document.getElementById("histlagonda").classList.add("hide");
		document.getElementById("histvantage").classList.add("hide");
		document.getElementById("histvanquish").classList.add("hide");
		document.getElementById("histdb11").classList.remove("hide");
		console.log(2);
		
	}
	else if(num==2){
		document.getElementById("discdb11").classList.add("hide");
		document.getElementById("discdb10").classList.add("hide");
		document.getElementById("disclagonda").classList.add("hide");
		document.getElementById("discvantage").classList.add("hide");
		document.getElementById("disc1").classList.add("hide");
		document.getElementById("discdbz").classList.remove("hide");
		document.getElementById("car-modeldb11").classList.add("hide");
		document.getElementById("car-modeldb10").classList.add("hide");
		document.getElementById("car-modeldblagonda").classList.add("hide");
		document.getElementById("car-modelvantage").classList.add("hide");
		document.getElementById("car-modelvanquish").classList.add("hide");
		document.getElementById("car-modeldbz").classList.remove("hide");
		document.getElementById("car-model").classList.add("hide");
		document.getElementById("hist1").classList.add("hide");
		document.getElementById("histdb11").classList.add("hide");
		document.getElementById("histdb10").classList.add("hide");
		document.getElementById("histlagonda").classList.add("hide");
		document.getElementById("histvantage").classList.add("hide");
		document.getElementById("histvanquish").classList.add("hide");
		document.getElementById("histdbz").classList.remove("hide");
		console.log(3);
	}
	else if(num==3){
		document.getElementById("discdb11").classList.add("hide");
		document.getElementById("discdbz").classList.add("hide");
		document.getElementById("discdb10").classList.add("hide");
		document.getElementById("discvantage").classList.add("hide");
		document.getElementById("disc1").classList.add("hide");
		document.getElementById("disclagonda").classList.remove("hide");
		document.getElementById("car-modeldb11").classList.add("hide");
		document.getElementById("car-modeldbz").classList.add("hide");
		document.getElementById("car-modeldb10").classList.add("hide");
		document.getElementById("car-modelvantage").classList.add("hide");
		document.getElementById("car-modelvanquish").classList.add("hide");
		document.getElementById("car-modeldblagonda").classList.remove("hide");
		document.getElementById("car-model").classList.add("hide");
		document.getElementById("hist1").classList.add("hide");
		document.getElementById("histdb11").classList.add("hide");
		document.getElementById("histdbz").classList.add("hide");
		document.getElementById("histdb10").classList.add("hide");
		document.getElementById("histvantage").classList.add("hide");
		document.getElementById("histvanquish").classList.add("hide");
		document.getElementById("histlagonda").classList.remove("hide");
		console.log(4);
	}
	else if(num==4){
		document.getElementById("discdb11").classList.add("hide");
		document.getElementById("discdbz").classList.add("hide");
		document.getElementById("disclagonda").classList.add("hide");
		document.getElementById("discdb10").classList.add("hide");
		document.getElementById("disc1").classList.add("hide");
		document.getElementById("discvantage").classList.remove("hide");
		document.getElementById("car-modeldb11").classList.add("hide");
		document.getElementById("car-modeldbz").classList.add("hide");
		document.getElementById("car-modeldblagonda").classList.add("hide");
		document.getElementById("car-modeldb10").classList.add("hide");
		document.getElementById("car-modelvantage").classList.remove("hide");
		document.getElementById("car-model").classList.add("hide");
		document.getElementById("hist1").classList.add("hide");
		document.getElementById("histdb11").classList.add("hide");
		document.getElementById("histdbz").classList.add("hide");
		document.getElementById("histlagonda").classList.add("hide");
		document.getElementById("histdb10").classList.add("hide");
		document.getElementById("histvanquish").classList.add("hide");
		document.getElementById("histvantage").classList.remove("hide");
		console.log(5);
	}
	else if(num==5){
		document.getElementById("discdb11").classList.add("hide");
		document.getElementById("discdbz").classList.add("hide");
		document.getElementById("disclagonda").classList.add("hide");
		document.getElementById("discvantage").classList.add("hide");
		document.getElementById("disc1").classList.add("hide");
		document.getElementById("discdb10").classList.remove("hide");
		document.getElementById("car-modeldb11").classList.add("hide");
		document.getElementById("car-modeldbz").classList.add("hide");
		document.getElementById("car-modeldblagonda").classList.add("hide");
		document.getElementById("car-modelvantage").classList.add("hide");
		document.getElementById("car-modeldb10").classList.add("hide");
		document.getElementById("car-modelvanquish").classList.remove("hide");
		document.getElementById("car-model").classList.add("hide");
		document.getElementById("hist1").classList.add("hide");
		document.getElementById("histdb11").classList.add("hide");
		document.getElementById("histdbz").classList.add("hide");
		document.getElementById("histlagonda").classList.add("hide");
		document.getElementById("histvantage").classList.add("hide");
		document.getElementById("histvanquish").classList.add("hide");
		document.getElementById("histdb10").classList.remove("hide");
		console.log(6);
	}
	else{
		console.log(7);
	}
}

