//related to bianli.ui
//related to shuiguo.ui
//related to yexiao.ui
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var global = sm("do_Global");
var storage = sm("do_Storage");

var listview, listdata;

listview = ui("do_ListView_2");
listdata = mm("do_ListData");

listview.bindItems(listdata);

storage.readFile("data://pinpai.json", function(data){// 读取文件
    listdata.addData(data); // 给ListData添加数据
    listview.refreshItems(); // 刷新ListView 行数据;
});

listview.on("longTouch", function(index) {
    nf.alert(listdata.getOne(index), "longTouch");
});

listview.on("touch", function(index) {
    nf.alert(listdata.getOne(index), "touch");
});

var scrollview=ui("scrollview");
scrollview.on("pull", function(data) {
    /**
     * @此事件将会多次执行.
     * @state == 0 : pull动作开始
     * @state == 1 : pull动作持续中
     * @state == 2 : pull动作结束
     */
    if (data.state !== 2) return;
    this.rebound();
});
scrollview.toBegin();