let baseUrl = "localhost/yhd.com"; // 基础路径 必须是绝对路径

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop'); //   获取cookie数据
            if (shop) {
                shop = JSON.parse(shop);
                let idlist = shop.map(elm => elm.id).join();
                $.ajax({
                    type: "get",
                    url: `../../interface/shop.php`,
                    data: {
                        idlist: idlist
                    },
                    dataType: "json",
                    success: function(res) {
                        let tempstr = '';
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            // cookie中获取 于当前从数据库中遍历出的相同元素
                            let arr = shop.filter(val => val.id == elm.id);
                            tempstr += `
                            <li class="item">
                                <div class="c-box">
                                    <input type="checkbox" id="p1">
                                </div>
                                <div class="p-pic">
                                    <img src="../${pic.src}" alt="../${pic.title}">
                                </div>
                                <div class="p-title">
                                    ${elm.title}

                                </div>
                                <div class="p-price">
                                   ${elm.price}
                                </div>
                                <div class="num_act clearfix"> 
                                <a href="javascript:;" class="minus unable"  >−</a> <input type="text" class="input" value="${arr[0].num}" ><a href="javascript:;" class="add">+</a> 
                                </div>
                                <div class="p-price-sum">
                                    ${(arr[0].num*elm.price).toFixed(2)}
                                </div>
                                <div class="p-del" aaa='${elm.id}'>
                                    <a href="javascript:;">删除</a>
                                </div>
                            </li>`;

                        });
                        $('.xr').append(tempstr);
                        $('.kc').text(res[0].num)
                        function qqq(){
                            let n=0;
                            for(let i=0;i<$('.p-price-sum').length;i++){
                                let numadd=$($('.p-price')[i]).text()*$($('.input')[i]).val()
                                $($('.p-price-sum')[i]).text(numadd.toFixed(2));
                                if($($(':checkbox')[i]).prop('checked')){
                                    n+=parseInt($($('.p-price-sum')[i]).text());
                                    console.log($($('.p-price-sum')[i]).text())
                                }
                                
                                
                            }
                            $('.money b').html(n.toFixed(2));
                        }
                        qqq();
                        $('.input').on('change',function(){
                            let num=parseInt($(this ).val());//获取到你inupt框里的值

                            if(num<1 || num>res[0].num || isNaN(num) ){
                                //判断是否大于或小于边距 和如果输入的是字母等等会转换成NAN
                                alert('请输入正确的值');
                                $(this ).val(1);
                            }
                            qqq();  
                        })
                        $('.minus').on('click',function(){
                            let num=$(this ).next().val();
                            if(num>1){
                                num--;
                            }else{
                                num=1;
                            }
                            $(this ).next().val(num);
                            qqq();  
                        })
                        $('.add').on('click',function(){
                            let num=parseInt($(this).prev().val());
                            let numpk=parseInt(res[0].num)
                            console.log(num,numpk)
                            if(num<res[0].num){
                                num++;
                            }else{
                                num=numpk;
                            }
                            $(this ).prev().val(num);
                            qqq();
                        })
                        $('.p-del').on('click',function(){
                            let rem=$(this).attr('aaa');//获取属性值(cookie里存的id)
                            let coo=[];//创建数组用于存没有被删除的元素
                            shop.forEach(elm=>{//循环遍历判断删除指定的数据
                                if(elm.id!==rem){
                                    coo.push(elm);
                                }
                            })
                            cookie.set('shop', JSON.stringify(coo), 1);//提交cookie数据
                            window.location.reload();//刷新页面
                        })
                        
                        
                        // console.log($(':checkbox').prop('checked'));
                        $('.allselector').on('click',function(){
                            let chcked=$(this).prop('checked');
                            if(chcked){
                                for (let i = 0; i < $(':checkbox').length-1; i++) {
                                    $($(':checkbox')[i]).prop('checked',true);
                                }
                            }else{
                                for (let i = 0; i < $(':checkbox').length-1; i++) {
                                    $($(':checkbox')[i]).prop('checked',false);
                                }
                            }
                            
                        })
                        if($('.allselector').prop('checked')){
                            for (let i = 0; i < $(':checkbox').length-1; i++) {
                                $($(':checkbox')[i]).prop('checked',true);
                            }
                            qqq();
                        }
                        $(':checkbox').on('click',function(){
                            let num=0;
                            for (let i = 0; i < $(':checkbox').length-1; i++) {
                                $($(':checkbox')[i]).prop('checked');
                                num+= $($(':checkbox')[i]).prop('checked');
                                
                            }
                            if(num==$(':checkbox').length-1){
                                $('.allselector').prop('checked',true);
                            }else{
                                $('.allselector').prop('checked',false);
                            }
                            qqq();
                            $('.all>em').html(num);
                            $('.num_count>span>b').html(num);
                        })
                    }
                });
            }  
        },
        state:function(){
            let state=cookie.get('state');
            let qqq;
            if(state){
                qqq=JSON.parse(state);
            }
            if(qqq){
                 //登录的文字切换和链接切换
               $('.userwrite span').html('你好，');
                $('.login').html(qqq.username);
                $('.login').attr({
                    href:'javascript:;'
                })
                $('.login').css({
                    color:'black'
                });
                //注册退出的文字切换和链接切换
                $('.registry').html('退出');
                $('.registry').attr({
                    href:'javascript:;'
                })
            }else{
                //登录的文字切换和链接切换
                $('.userwrite span').html('你好，请');
                $('.login').html('登录');
                $('.login').css({
                    color:'#ff4040'
                });
                $('.login').css({
                    color:'black'
                });
                $('.login').attr({
                    href:'./login.html'
                })
                //注册退出的文字切换和链接切换
                $('.registry').html('注册');
                $('.registry').attr({
                    href:'./registry.html'
                })
            }
        },
        //退出按钮点击
        exit:function(){
            $('.registry').on('click',function(){
                if($(this).html()=='退出'){
                    cookie.remove('state');
                    window.location.reload();
                }
            })
        }
    }
});