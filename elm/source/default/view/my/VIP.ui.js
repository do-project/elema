//related to VIP.ui
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

var sv_silder0 = ui("slide");  //用法 与ListView  GridView  完全一样;

var listdata = mm("do_ListData");  // 创建一个 数据集合;

sv_silder0.bindItems(listdata);// 建立sliderview 与 ListData 的行数据关系;

listdata.addData([
    {template : 0},
    {template : 1},
]);

sv_silder0.refreshItems();

var i=1,y=0;
var timer01 = mm("do_Timer");
timer01.delay = 0;
timer01.interval = 50;

var DURATION01 = 0;

timer01.on("tick", function(){
    if(DURATION01 >= 30){
        DURATION01 = 0;
        sv_silder0.index=i%2;
        i++;
    }
    DURATION01++;
});
timer01.start();