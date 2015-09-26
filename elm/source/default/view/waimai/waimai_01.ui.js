//related to waimai_01.ui
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var global = sm("do_Global");

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

listdata.addData([ { "logo":"source://image/kuai.png","name":"随缘餐厅","num":"(56)","month":"月售841份","1":"source://image/icon_star_golden.png","2":"source://image/icon_star_golden.png","3":"source://image/icon_star_golden.png","4":"source://image/icon_star_golden.png","5":"source://image/icon_star_gray.png","juli":"28分钟/901米","money":"¤10" },
                   { "logo":"source://image/shiwei.png","name":"拾味","num":"(121)","month":"月售345份","1":"source://image/icon_star_golden.png","2":"source://image/icon_star_golden.png","3":"source://image/icon_star_golden.png","4":"source://image/icon_star_golden.png","5":"source://image/icon_star_gray.png","juli":"28分钟/673米","money":"¤10" },
                   { "logo":"source://image/shuiguo.png","name":"水果蛋糕房","num":"","month":"月售4份","1":"source://image/icon_star_golden.png","2":"source://image/icon_star_golden.png","3":"source://image/icon_star_gray.png","4":"source://image/icon_star_gray.png","5":"source://image/icon_star_gray.png","juli":"16.33千米","money":"¤336" },
                   { "logo":"source://image/mala.png","name":"辣火火麻辣海鲜","num":"(209)","month":"月售441份","1":"source://image/icon_star_golden.png","2":"source://image/icon_star_golden.png","3":"source://image/icon_star_golden.png","4":"source://image/icon_star_golden.png","5":"source://image/icon_star_gray.png","juli":"50分钟/16.47千米","money":"¤300" },
                   { "logo":"source://image/fensi.png","name":"正宗福记老鸭粉","num":"(123)","month":"月售1499份","1":"source://image/icon_star_golden.png","2":"source://image/icon_star_golden.png","3":"source://image/icon_star_golden.png","4":"source://image/icon_star_golden.png","5":"source://image/icon_star_gray.png","juli":"26分钟/3.35千米","money":"¤20" },
                   { "logo":"source://image/kfc.png","name":"随缘餐厅","num":"(118)","month":"月售1405份","1":"source://image/icon_star_golden.png","2":"source://image/icon_star_golden.png","3":"source://image/icon_star_golden.png","4":"source://image/icon_star_golden.png","5":"source://image/icon_star_gray.png","juli":"21分钟/1.18千米","money":"¤0" },
                    ]);
//listview.refreshItems();

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