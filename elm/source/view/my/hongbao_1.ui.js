//related to hongbao_1.ui
var list = ui("list");
var listdata = mm("do_ListData");
list.bindItems(listdata);
listdata.addData([ 
	{template: 0,img:"source://image/red_disable_bg_left.png",lb_1:"3",lb_2:".0","lb_3":"开学红包","lb_4":"·满18元可用","lb_5":"·限尾号9687的手机使用","lb_6":"2015-08-11  至  2015-9-11","lb":"已使用","lb_7":"true"},
	{template: 0,img:"source://image/red_disable_bg_left_yellow.png",lb_1:"2",lb_2:".0","lb_3":"普通红包","lb_4":"·满12元可用","lb_5":"·限尾号9687的手机使用","lb_6":"2015-08-1  至  2015-9-1","lb":"已过期","lb_7":"true"}
]);
list.refreshItems();