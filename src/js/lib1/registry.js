define(['jquery'], function($) {
    return {
        render: function() {
            
           //用户名等等文字弹出
           $('.re_form ul li div input').on('focus',function(){
            $(this).siblings().css({
                left:`-70px`
                });
            });
            
            let isRight=[0,0,0,0,0];
            let a;
        　　
            $('#user').on('blur',function(){
                user($(this));
            })//用户名框移出
            $('#pho').on('blur',function(){
                pho($(this));
            })//手机号移出
            $('#security').on('blur',function(){
                if($(this).val()==a){
                    isRight[2]=1;
                    $('.tips_sec').css({
                        display:'none'
                    });
                    $('.tips_sec').nextUntil().css({
                        display:'block'
                    });
                }else{
                    isRight[2]=0;
                    $('.tips_sec').css({
                        display:'block'
                    });
                    $('.tips_sec').nextUntil().css({
                        display:'none'
                    });
                }
            })//验证码移出
            $('#pass').on('blur',function(){
                pass($(this));
            })//密码
            $('#truepass').on('blur',function(){
                if($(this).val()==$('#pass').val() && $(this).val()!=''){  
                    isRight[4]=1;
                    $('.tips_two').css({
                        display:'none'
                    });
                    $('.tips_two').nextUntil().css({
                        display:'block'
                    });
                }else{
                    isRight[4]=0;
                    $('.tips_two').css({
                        display:'block'
                    });
                    $('.tips_two').nextUntil().css({
                        display:'none'
                    });
                }
            })//确认密码
            //随机数字验证码
            function yzm(){
                var code = "";
            　　for(var i=0;i<6;i++){
            　　　　var radom = Math.floor(Math.random()*10);
            　　　　code += radom;
            　　}
                alert(`验证码为：${code}`)
                return code;
            }
            $('.yanzheng').on('click',function(){
                a=yzm();
            })
            //用户名
            function user(a){
                //4-20位，可由中文、英文、数字或符号"_"组成
                var reg = /[\u4e00-\u9fa5a-zA-Z0-9\-]{4,20}/;
                if(reg.test(a.val())){
                    isRight[0]=1;
                    $('.tips_user').css({
                        display:'none'
                    });
                    $('.tips_user').nextUntil().css({
                        display:'block'
                    });
                }else{
                    isRight[0]=0;
                    $('.tips_user').css({
                        display:'block'
                    });
                    $('.tips_user').nextUntil().css({
                        display:'none'
                    });
                }
            }
            //手机号
            function pho(a){
                //手机号正则验证
                var reg = /^1[34578]\d{9}$/;
                if(reg.test(a.val())){
                    isRight[1]=1;
                    $('.tips_pho').css({
                        display:'none'
                    });
                    $('.tips_pho').nextUntil().css({
                        display:'block'
                    });
                }else{
                    isRight[1]=0;
                    $('.tips_pho').css({
                        display:'block'
                    });
                    $('.tips_pho').nextUntil().css({
                        display:'none'
                    });
                }
            }
            //密码格式
            function pass(a){
                //手机号验证
                var reg = /^[a-zA-Z0-9]\w{5,19}$/;
                if(reg.test(a.val())){
                    isRight[3]=1;
                    $('.tips_pas').css({
                        display:'none'
                    });
                    $('.tips_pas').nextUntil().css({
                        display:'block'
                    });
                }else{
                    isRight[3]=0;
                    $('.tips_pas').css({
                        display:'block'
                    });
                    $('.tips_pas').nextUntil().css({
                        display:'none'
                    });
                }
            }
            
            $('.re_button').on('click',function(){
                let qqq=0;
                isRight.forEach(elm=>{
                    qqq+=elm;
                })
                if(qqq==5){
                    $.post("../../interface/zc.php",  {
                    username:$('#user').val(),
                    password:$('#pass').val(),
                    phone:$('#pho').val()
                    },
                        function (data, textStatus, jqXHR) {
                            if(data){
                                alert('注册成功');
                                location.href='../html/login.html';
                            }else{
                                alert('用户名或手机号以注册');
                                location.href='../html/registry.html';
                            }
                        },
                        "json"
                    );  
                }   
            })  
                
        }
            
    }
});