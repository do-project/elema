//related to my.ui
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var global = sm("do_Global");

var balace=ui("balace");
balace.on("touch",function(){
	app.openPage("source://view/my/balance.ui")
});

var ly_9=ui("ly_9");
ly_9.on("touch",function(){
	app.openPage("source://view/my/message.ui")
});

var ly_8=ui("ly_8");
ly_8.on("touch",function(){
	app.openPage("source://view/my/infor.ui")
});

var ly_1=ui("ly_1");
ly_1.on("touch",function(){
	app.openPage("source://view/my/account.ui")
});

var ly_2=ui("ly_2");
ly_2.on("touch",function(){
	app.openPage("source://view/my/collect.ui")
});

var ly_3=ui("ly_3");
ly_3.on("touch",function(){
	app.openPage("source://view/my/photo.ui")
});

var ly_4=ui("ly_4");
ly_4.on("touch",function(){
	app.openPage("source://view/find/shop_1.ui")
});

var ly_5=ui("ly_5");
ly_5.on("touch",function(){
	app.openPage("source://view/my/VIP.ui")
});

var ly_6=ui("ly_6");
var bg=ui("bg");
ly_6.on("touch",function(){
	bg.add("share", "source://view/my/share.ui", 0, 0);
});

var ly_10=ui("ly_10");
ly_10.on("touch",function(){
	app.openPage("source://view/my/serve.ui")
});