//related to wifi.ui
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

var ly_1=ui("ly_1");
var ly_2=ui("ly_2");
var ly_3=ui("ly_3");
var ly_4=ui("ly_4");
var ly_5=ui("ly_5");
var ly_6=ui("ly_6");
var img_1=ui("img_1");
var img_2=ui("img_2");
var img_3=ui("img_3");
var img_4=ui("img_4");
var img_5=ui("img_5");
var img_6=ui("img_6");
var linear_1=ui("linear_1");
var linear_2=ui("linear_2");
var linear_3=ui("linear_3");
var linear_4=ui("linear_4");
var linear_5=ui("linear_5");
var linear_6=ui("linear_6");

ly_1.on("touchDown",function(){
	ly_1.bgColor="FFFF00FF";
});
ly_1.on("touch",function(){
	ly_1.bgColor="FFFFFFFF";
	img_1.source="source://image/grey_triangle_up_icon.png";
	if(linear_1.visible==true){
		linear_1.visible=false;
	}
	else if(linear_1.visible==false){
		linear_1.visible=true;
	}
	;
});

ly_2.on("touchDown",function(){
	ly_2.bgColor="FFFF00FF";
});
ly_2.on("touch",function(){
	ly_2.bgColor="FFFFFFFF";
	img_2.source="source://image/grey_triangle_up_icon.png";
	if(linear_2.visible==true){
		linear_2.visible=false;
	}
	else if(linear_2.visible==false){
		linear_2.visible=true;
	}
});

ly_3.on("touchDown",function(){
	ly_3.bgColor="FFFF00FF";
});
ly_3.on("touch",function(){
	ly_3.bgColor="FFFFFFFF";
	img_3.source="source://image/grey_triangle_up_icon.png";
	if(linear_3.visible==true){
		linear_3.visible=false;
	}
	else if(linear_3.visible==false){
		linear_3.visible=true;
	}
});

ly_4.on("touchDown",function(){
	ly_4.bgColor="FFFF00FF";
});
ly_4.on("touch",function(){
	ly_4.bgColor="FFFFFFFF";
	img_4.source="source://image/grey_triangle_up_icon.png";
	if(linear_4.visible==true){
		linear_4.visible=false;
	}
	else if(linear_4.visible==false){
		linear_4.visible=true;
	}
});

ly_5.on("touchDown",function(){
	ly_5.bgColor="FFFF00FF";
});
ly_5.on("touch",function(){
	ly_5.bgColor="FFFFFFFF";
	img_5.source="source://image/grey_triangle_up_icon.png";
	if(linear_5.visible==true){
		linear_5.visible=false;
	}
	else if(linear_5.visible==false){
		linear_5.visible=true;
	}
});

ly_6.on("touchDown",function(){
	ly_6.bgColor="FFFF00FF";
});
ly_6.on("touch",function(){
	ly_6.bgColor="FFFFFFFF";
	img_6.source="source://image/grey_triangle_up_icon.png";
	if(linear_6.visible==true){
		linear_6.visible=false;
	}
	else if(linear_6.visible==false){
		linear_6.visible=true;
	}
});