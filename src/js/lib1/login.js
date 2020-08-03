define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            
            $('#login_button').on('click',function(){
                $.ajax({
                    type: "post",
                    url: "../../interface/login.php",
                    data: `username=${$("#username").val()}&userpass=${$("#password").val()}`,
                    dataType: "json",
                    success: function (res) {
                        if(res){
                            let state=cookie.get('state');
                            let tate={
                                username:$("#username").val(),
                                msg:true
                            }
                            let qqq;
                            if(!state){}else{ qqq=JSON.parse(state);}
                            if(!state || tate.username!=qqq.username){
                                cookie.set('state',JSON.stringify(tate),7);
                                alert('登录成功');
                                location.href='../html/index.html';
                            }else{
                                if(tate.username==qqq.username && qqq.msg==true){
                                    alert('账户已登录');
                                    location.href='../html/index.html';
                                }else{
                                    alert('登录成功');
                                    location.href='../html/index.html';
                                }
                            }
                          
                        }else{
                            alert('账户或密码错误');
                            location.href='../html/login.html';
                        }
                    }
                }); 
            })
            
        }
            
    }
});