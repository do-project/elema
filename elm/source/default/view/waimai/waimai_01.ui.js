//related to waimai_01.ui
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var global = sm("do_Global");
var storage = sm("do_Storage");

var  bdlocation= sm("do_BaiduLocation");
var address=ui("lb_address");

bdlocation.on("result",function(data, e){
    address.text = data.address;
    bdlocation.stop();
});
bdlocation.start();

var search=ui("search");
search.on("touch",function(){
	app.openPage("source://view/waimai/search.ui");
});

var linear=ui("linear");
linear.on("touch",function(){
	app.openPage("source://view/waimai/location.ui");
})
var sv_silder0 = ui("slide");  //用法 与ListView  GridView  完全一样;

var listdata = mm("do_ListData");  // 创建一个 数据集合;

sv_silder0.bindItems(listdata);// 建立sliderview 与 ListData 的行数据关系;

listdata.addData([
    {template : 0},
    {template : 1},
    {template : 2},
    {template : 3},
    {template : 4}
]);

sv_silder0.refreshItems();

var i=1,y=0;
var timer01 = mm("do_Timer");
timer01.delay = 0;
timer01.interval = 125;

var DURATION01 = 0;

timer01.on("tick", function(){
    if(DURATION01 >= 30){
        DURATION01 = 0;
        sv_silder0.index=i%5;
        i++;
    }
    DURATION01++;
});
timer01.start();

var listview, listdata;

listview = ui("do_ListView_2");
listdata = mm("do_ListData");

listview.bindItems(listdata);

storage.readFile("data://waimai.json", function(data){// 读取文件
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

var grid=ui("grid");
var data=mm("do_ListData");
grid.bindItems(data);

var _datas = [
              {template:0 , "img":"source://image/11.jpg","text":"品牌馆"},
              {template:0 , "img":"source://image/12.jpg","text":"预定早餐"},
              {template:0 , "img":"source://image/13.jpg","text":"新店特惠"},
              {template:0 , "img":"source://image/14.jpg","text":"下午茶"},
              {template:1 , "img":"source://image/15.jpg","text":"水果"},
              {template:1 , "img":"source://image/16.jpg","text":"鲜花蛋糕"},
              {template:1 , "img":"source://image/17.jpg","text":"便利店"}
             ]
             
data.addData(_datas);
grid.refreshItems();