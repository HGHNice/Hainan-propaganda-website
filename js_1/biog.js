var num=0;
$(function () {
   // 鼠标触碰到show_1的时候，触发事件
    $(".show_1").hover(function () {
    //显示#one的内容，隐藏#two到#six的内容
        $("#one").show().siblings().hide();

    });
    $(".show_2").hover(function () {
        $("#two").show().siblings().hide();
    });
    $(".show_3").hover(function () {
        $("#three").show().siblings().hide();
    });
    $(".show_4").hover(function () {
        $("#four").show().siblings().hide();
    });
    $(".show_5").hover(function () {
        $("#five").show().siblings().hide();
    });
    $(".show_6").hover(function () {
        $("#six").show().siblings().hide();
    });
    //每1s换一张图片
    setInterval("show()",2000);
});

function show() {
//定义one到six的数组
    var list=["one","two","three","four","five","six"];
    num=Math.floor(Math.random()*6);
    $("#"+list[num]).show().siblings().hide();
    //添加旋转过渡效果
    $("#"+list[num]).addClass("roa");
}