//related to location.ui
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

var text=ui("text");
var image_2=ui("image_2");
if(text.text != null){
	image_2.visible="true";
	image_2.on("touch",function(){
		text.text=null
	});
};


var anim = mm("do_Animation", "A-ID-1", "app");
anim.rotate({
    id : "animation-index-3",
    delay : 0,
    duration : 1000,
    curve : "Linear",
    repeatCount : -1,
    autoReverse : false,
    fillAfter : false,
    fromDegree : 0,//起始旋转角度
    toDegree : 360,//结束旋转角度
    pivotX : 0,//缩放起点x坐标
    pivotY : 0//缩放起点y坐标
});
var location=ui("location");
var label=ui("label");
var image=ui("image");
location.on("touch",function(){
	label.text="正在定位，请稍后……";
	image.source="source://view/image/spinner_20_inner_holo.png";
	image.animate(anim);
});

var ly_9=ui("ly_9");
var image_1=ui("image_1");
var lb=ui("lb");
ly_9.on("touch",function(){
	image_1.source="source://image/off.png";
	lb.text="打开自动定位后，每次打开应用会自动定位到当前位置";
});