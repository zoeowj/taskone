//注册验证
function validatorSignUpForm() {
    var ret = true;
    if(!validator.isMobilePhone($("#phone").val(),"zh-CN")){
        ret = false;
        alert("手机号不正确");
        $("#phone").focus();
        return false;
    }
    if(!validator.isLength($("#password").val(),{min:6, max: 20})){
        ret = false;
        alert("请输入6~20密码");
        $("#password").focus();
        return false;
    }
    if($("#password").val() !== $("#repassword").val()){
        ret = false;
        alert("两次密码输入不一致！");
        $("#repassword").focus();
        return false;
    }
    if(ret){
        signup();
    }
}
function signup(){
    var para = $("#signUpform").serialize();
    $.ajax(
        {
            url:'/users/signup',
            type:'POST',
            async:true,
            data:para,
            success:function (res) {
                console.log(res);
            }
        }
    );
}