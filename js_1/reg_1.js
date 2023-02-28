
function unameTest(){
    //获取用户名
    var varUname = $("#username").val();
    //声明正则表达式，表示用户名规则:
    var varReg = /^[a-zA-Z0-9_]{6,18}$/;
    if(varUname.length == 0){
        //如果没有内容，提示输入用户名
        $("#spanUnameId").html("用户名不能为空！");
        return false;
    }else if(varReg.test(varUname)){
        $("#spanUnameId").html("<span style='color: green;font-size: 1px;'>√</span>");
        return true;
    }else{
        $("#spanUnameId").html("用户名必须为6－18个字符数字下划线");
        return false;
    }
}
//密码校验
function pwdTest(){
    //获取密码
    varPwd = $("#password").val();
    //声明正则表达式，表示用户名规则:数字和字母，不少于4个
    var varReg = /^[a-zA-Z0-9_]{6,18}$/;
    if(varPwd.length == 0){
        //如果没有内容，提示输入密码
        $("#username").css("margin-bottom","0px");
        $("#spanPwdId").html("密码不能为空！");
        return false;
    }else if(varReg.test(varPwd)){
        $("#spanPwdId").html("<span style='color: green;font-size: 14px;'>√</span>");
        return true&&pwdTest2();
    }else{
        $("#spanPwdId").html("密码必须为6－18个字符数字下划线");
        return false;
    }
}
//确认密码校验
function pwdTest2(){
    //获取确认密码
    var varPwd2 = $("#repassword").val();
    if(varPwd2.length == 0){
        //如果没有内容，提示输入密码
        $("#spanPwdId2").html("密码不能为空！");
        return false;
    }else if(varPwd2 === varPwd){
        $("#spanPwdId2").html("<span style='color: green;font-size: 14px;'>√</span>");
        return true;
    }else{
        $("#spanPwdId2").html("密码输入不一致");
        return false;
    }
}
//校验手机号
function phoneTest(){
    //获取手机号
    var varPhone = $("#phone").val();
    //声明正则表达式，表示用户名规则:
    var varReg = /^1[3456789]\d{9}$/;
    if(varPhone.length == 0){
        //如果没有内容，提示输入用户名
        $("#spanPhoneId").html("手机号不能为空！");
        return false;
    }else if(varReg.test(varPhone)){
        $("#spanPhoneId").html("<span style='color: green;font-size: 14px;'>√</span>");
        return true;
    }else{
        $("#spanPhoneId").html("手机号格式错误");
        return false;
    }
}
//校验邮箱
function emailTest(){
    //获取邮箱
    var varEmail = $("#email").val();
    //声明正则表达式，表示用户名规则:
    var varReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(varEmail.length == 0){
        //如果没有内容，提示输入用户名
        $("#spanEmailId").html("邮箱不能为空！");
        return false;
    }else if(varReg.test(varEmail)){
        $("#spanEmailId").html("<span style='color: green;font-size: 14px;'>√</span>");
        return true;
    }else{
        $("#spanEmailId").html("邮箱格式错误");
        return false;
    }
}
//校验身份证
function idcardTest(){
    //获取身份证
    var varIdcard = $("#idCard").val();
    //声明正则表达式，表示用户名规则:
    var varReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(varIdcard.length == 0){
        //如果没有内容，提示输入用户名
        $("#spanIdcardId").text("身份证不能为空！");
        return false;
    }else if(varReg.test(varIdcard)){
        $("#spanIdcardId").html("<span style='color: green;font-size: 14px;'>√</span>");
        return true;
    }else{
        $("#spanIdcardId").html("身份证格式错误");
        return false;
    }
}
function login(){
    const user = $("#username").val();
    const password = $("#password").val();
    const repassword = $("#repassword").val();
    const phone = $("#phone").val();
    if (user==""||password==""||repassword==""||phone==""){
        alert("请完善信息");
        return false;
    }
}

