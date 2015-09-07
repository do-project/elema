//related to edan.ui
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function() { // 监听android 的返回按钮;
    app.closePage()
});

/** ***************************************************************************************** */

var listview, listdata;

listview = ui("do_ListView_1");
listdata = mm("do_ListData");

listview.bindItems(listdata);

listdata.addData([ { NAME : "随园餐厅", LOGO : "source://image/kuai.png",state : "订单已完成",TIME :"2015-08-08  12:26",NUM : "2份", MONEY : "￥22.0" } ]);
listview.refreshItems();

listview.on("longTouch", function(index) {
    nf.alert(listdata.getOne(index), "longTouch");
});

listview.on("touch", function(index) {
    nf.alert(listdata.getOne(index), "touch");
});

listview.on("pull", function(data) {
    /**
     * @此事件将会多次执行.
     * @state == 0 : pull动作开始
     * @state == 1 : pull动作持续中
     * @state == 2 : pull动作结束
     */
    if (data.state !== 2) return;
    this.rebound();
});
listview.on("push", function(data) {
    /**
     * @此事件将会多次执行.
     * @state == 0 : pull动作开始
     * @state == 1 : pull动作持续中
     * @state == 2 : pull动作结束
     */
    if (data.state !== 2) return;
    this.rebound();
});
