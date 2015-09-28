//related to detail.ui
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var global = sm("do_Global");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

var listview, listdata;

listview = ui("listview");
listdata = mm("do_ListData");

listview.bindItems(listdata);

listdata.addData([ 
      { lb_1 : "合计", color1 : "000000FF",size1 : "28",style_1 :"normal", lb_2 : "3份", color2 : "000000FF",size2 : "28",style_2 :"normal", lb_3 : "￥24", color3 : "FF8000FF",size3 : "28",style_3 :"normal"},
      { lb_1 : "鱼香肉丝", color1 : "C0C0C0FF",size1 : "23",style_1 :"normal", lb_2 : "×3", color2 : "C0C0C0FF",size2 : "23",style_2 :"normal", lb_3 : "￥33", color3 : "C0C0C0FF",size3 : "23",style_3 :"normal"},
      { lb_1 : "在线支付立减优惠", color1 : "FF8000FF",size1 : "23",style_1 :"normal", lb_2 : "×1", color2 : "FF8000FF",size2 : "23",style_2 :"normal", lb_3 : "-￥9", color3 : "FF8000FF",size3 : "23",style_3 :"normal"}
      ]);
listview.refreshItems();