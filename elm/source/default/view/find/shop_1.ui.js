//related to shop_1.ui
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

var grid_view, listdata;
grid_view = ui("gridView");
listdata = mm("do_ListData");
grid_view.bindItems(listdata);

var _datas = [
              {"img":"source://image/jifen_1.jpg"},
              {"img":"source://image/jifen_2.jpg"},
              {"img":"source://image/jifen_3.jpg"},
              {"img":"source://image/jifen_4.jpg"},
              {"img":"source://image/jifen_5.jpg"},
              {"img":"source://image/jifen_6.jpg"}
             ]
             
listdata.addData(_datas);
grid_view.refreshItems();

var do_scrollview_1=ui("do_ScrollView_1");
do_scrollview_1.toBegin();