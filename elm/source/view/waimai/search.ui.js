//related to search.ui
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

var label=ui("label");
var image=ui("image");
var text=ui("text");
if(text.text != null){
	image.visible="true";
	label.visible="true";
	image.on("touch",function(){
		text.text=null
	});
}