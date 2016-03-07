//related to collect.ui
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var global = sm("do_Global");
var storage = sm("do_Storage")

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

var do_segmentview_1 = ui("do_SegmentView_1");
var segment_listdata = mm("do_ListData");
do_segmentview_1.bindItems(segment_listdata);

var do_slideview_1 = ui("do_SlideView_3");
var slide_listdata = mm("do_ListData");
do_slideview_1.bindItems(slide_listdata);
//segmentview绑定数据
segment_listdata.addData([
	{template: 0,title: "餐厅", fontColor : "339DFDFF", lb:true},
	{template: 0,title: "美食", fontColor : "000000FF", lb:false}
]);
do_segmentview_1.refreshItems();
/***********************************************************/
//滑动时改变字体颜色的方法
var changecolor = function(index){
    segment_listdata.removeAll();
    if (index == 0) {
        segment_listdata.addData([
        	{template: 0,title: "餐厅", fontColor : "339DFDFF", lb:true},
        	{template: 0,title: "美食", fontColor : "000000FF", lb:false}
        ]);
    }else if(index==1){
        segment_listdata.addData([
            {template: 0,title: "餐厅", fontColor : "000000FF", lb:false},
            {template: 0,title: "美食", fontColor : "339DFDFF", lb:true}
        ]);
    }
 	do_segmentview_1.refreshItems();
}
/***********************************************************/
//当segmentview的index变化时,读取
do_segmentview_1.on("indexChanged", function(index){
    do_slideview_1.set({index: index});
    do_slideview_1.refreshItems({});
    changecolor(index);
});
/***********************************************************/
//slideview绑定数据
slide_listdata.addData([ 
	{template: 0,img:"source://image/fav_icon_food_empty.png",lb_1:"暂无收藏",lb_2:"还没有收藏过餐厅，快去收藏喜欢的餐厅"},
	{template: 0,img:"source://image/fav_icon_restaurant_empty.png",lb_1:"暂无收藏",lb_2:"还没有收藏过美食，快去收藏喜欢的美食"},
]);
do_slideview_1.refreshItems();

do_slideview_1.on("indexChanged", function(index){
	do_segmentview_1.set({index: index});
    changecolor(index);
 });