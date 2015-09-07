//related to message.ui
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var global = sm("do_Global");

page.on("back", function(){
    app.closePage();
});

ui("action_back").on("touch", function(){
    app.closePage();
});

var image_0=ui("image_0");
var text=ui("text");
image_0.on("touch",function(){
	image.source="source://image/off.png";
	text.text="打开自动定位后，每次打开应用会自动定位到当前位置"
});

var image_1=ui("image_1");
image_1.on("touch",function(){
	image_1.source="source://image/off.png"
});

var ly_0=ui("ly_0");
var lb_0=ui("lb_0");
ly_0.on("touch",function(){
	lb_0.text="0MB"
});
