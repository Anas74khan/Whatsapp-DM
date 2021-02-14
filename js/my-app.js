var router = app.views.main.router;
var pageEl =  router.currentPageEl;
var mobile = "";
var message = "";
var transition = "f7-fade";



$$(document).on("click", ".backbtn", function(e)
{
		onbackbutton()
});

document.addEventListener("backbutton", onbackbutton, false);

function onbackbutton()
{
		if($(".page").data('name') == "main"){
		}
		else{
			router.back();
		}
}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
			router.navigate("/main/",{ignoreCache: true,transition:transition})
}

$(document).on("input","#mobile_no",function(e){
	let number = $("#mobile_no").val();
	if((number.length == 0 || number.length == 10) && parseInt(number)){
		mobile = "91"+number;
		$("#send").attr("href","https://wa.me/"+mobile+"?text="+message)
		$("#send").removeClass("disabled");
	}
	else{
		mobile = "";
		if((!mobile || mobile == "") && (!message || message == "")){
			$("#send").addClass("disabled");
		}
		else{
			$("#send").attr("href","https://wa.me/"+mobile+"?text="+message)
			$("#send").removeClass("disabled");
		}
	}
})

$(document).on('ready', function (e) {
  	router.navigate("/main/",{ignoreCache: true,transition:transition})
})


$(document).on("input","#message",function(e){
	let msg = $("#message").val();
	if(msg != ""){
		message = msg;
		$("#send").attr("href","https://wa.me/"+mobile+"?text="+message)
		$("#send").removeClass("disabled");
	}
	else{
		message = "";
		if((!mobile || mobile == "") && (!message || message == "")){
			$("#send").addClass("disabled");
		}
		else{
			$("#send").attr("href","https://wa.me/"+mobile+"?text="+message)
			$("#send").removeClass("disabled");
		}
	}
})