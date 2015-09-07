/**********************************************
 * Author : @Author
 * Timestamp : @Timestamp
 **********************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var global = sm("do_Global");

var anim = mm("do_Animation");
anim.alpha({
    id : "animation",
    delay : 0,
    duration : 2000,
    curve : "Linear",
    repeatCount : 0,
    autoReverse : true,
    fillAfter : true,
    alphaFrom : 0,
    alphaTo : 1
});

var logo=ui("logo");
var page = sm("do_Page");
page.on("loaded",function(){
	logo.animate(anim,function(){
		app.openPage("source://view/waimai.ui");
	});
});
  	