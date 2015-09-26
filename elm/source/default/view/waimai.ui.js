//related to waimai.ui
var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var global = sm("do_Global");
var canBack = false;

page.on("back", function(){
    if (canBack) {
        global.exit();
    } else {
        nf.toast("再按一次退出");
        canBack = true;
        delay3.start();
    }
});

var delay3 = mm("do_Timer");
delay3.delay = 2000;
delay3.interval = 2000;
delay3.on("tick", function(){
    this.stop();
    canBack = false;
});

var sv_silder0 = ui("center");  //；用法 与ListView  GridView  完全一样;
var listdata = mm("do_ListData");  // 创建一个 数据集合;
sv_silder0.bindItems(listdata);
listdata.addData([
                  {template : 0},
                  {template : 1},
                  {template : 2},
                  {template : 3}
              ]);
sv_silder0.refreshItems();

var lb_list = [ui("lb_0"),ui("lb_1"),ui("lb_2"),ui("lb_3")];
var ly_list = [ui("ly_0"),ui("ly_1"),ui("ly_2"),ui("ly_3")];
var img_list = [ui("img_0"),ui("img_1"),ui("img_2"),ui("img_3")];
var v = [], prev = {lb: lb_list[0], ly: ly_list[0],img: img_list[0],index: 0};
for (var i = 0, len = ly_list.length; i < len; i++) {
    v = ly_list[i];
    v.lb = lb_list[i];
    v.img = img_list[i];
    v.on("touch", function(){
        prev.lb.fontColor = "C0C0C0FF";
        prev.img.source = prev.img.source.replace("_d", "");
        this.lb.fontColor = "339DFDFF";
        this.img.source = "source://image/" + this.id + "_d.png";
        prev.ly = this;
        prev.lb = this.lb;
        prev.img = this.img;
        prev.index = this.id.substring(3,4);
        sv_silder0.set({index: prev.index});
    });
}

sv_silder0.on("indexChanged", function(index){
	var lb_id = "lb_"  + index;
	var img_id = "img_"  + index;
	var ly_id = "ly_"  + index;
	lb_list.forEach(function(v){
		v.fontColor = "C0C0C0FF";
	});
	img_list.forEach(function(v,k){
		v.source = "source://image/" + "ly_"  + k + ".png";
	});
	ui(lb_id).fontColor = "339DFDFF";
	ui(img_id).source = "source://image/" + "ly_"  + index + "_d.png";
});
