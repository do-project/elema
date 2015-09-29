//related to faxian_0.ui
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var global = sm("do_Global");

var ly_1=ui("ly_1");
ly_1.on("touch",function(){
	app.openPage("source://view/find/shop_1.ui");
});

var ly_3=ui("ly_3");
ly_3.on("touch",function(){
	app.openPage("source://view/find/shop_1.ui");
});

var button=ui("button");
button.on("touch",function(){
	app.openPage("source://view/find/shop_1.ui");
});

var grid_view, listdata;
grid_view = ui("gridView");
listdata = mm("do_ListData");
grid_view.bindItems(listdata);

var _datas = [
              {template:0,img:"source://image/jifen_1.png"},
              {template:1,img:"source://image/jifen_2.png"},
              {template:0,img:"source://image/jifen_3.png"},
              {template:1,img:"source://image/jifen_4.png"}
             ]
             
listdata.addData(_datas);
grid_view.refreshItems();

grid_view.on("longTouch", function(index) {
	if(index==0){
		app.openPage("source://view/find/detail/shiliu.ui");
	}
	if(index==1){
		app.openPage("source://view/find/detail/75.ui");
	}
	if(index==2){
		app.openPage("source://view/find/detail/bear.ui");
	}
	if(index==3){
		app.openPage("source://view/find/detail/fee.ui");
	}
});

grid_view.on("touch", function(index) {
	if(index==0){
		app.openPage("source://view/find/detail/shiliu.ui");
	}
	if(index==1){
		app.openPage("source://view/find/detail/75.ui");
	}
	if(index==2){
		app.openPage("source://view/find/detail/bear.ui");
	}
	if(index==3){
		app.openPage("source://view/find/detail/fee.ui");
	}
});


var do_scrollview_1=ui("do_ScrollView_1");
do_scrollview_1.toBegin();