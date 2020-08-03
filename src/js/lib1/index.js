
define(['jquery','cookie','lazy'],function($,cookie){
    class Banner {
        constructor() {
            this.pic = $('.ban_pic li');
            this.tab = $('.ban_tab li');
            this.index = 0;
            this.timer = null;
        }
        init() {
            let _this = this;
            this.tab.eq(0).addClass('active').siblings('li').removeClass('active');
            this.pic.eq(0).css({
                'opacity': 1,
                'z-index': 1
            }).siblings('li').css({
                'opacity': 0,
                'z-index': 0
            })
            this.tab.on('mouseover', function () {
                _this.index = $(this).index();
                $(this).addClass('active').siblings('li').removeClass('active');
                $('.ban_pic li').eq($(this).index()).css({
                    'opacity': 1,
                    'z-index': 1
                }).siblings('li').css({
                    'opacity': 0,
                    'z-index': 0
                })
                clearInterval(_this.timer);
            })
            this.tab.on('mouseout', function () {
                _this.autoplay($(this).index());
            })
            this.pic.on('mouseover',function(){
                clearInterval(_this.timer);
            })
            this.pic.on('mouseout',function(){
                _this.autoplay($(this).index());
            })
            this.autoplay($(this).index());
        }
        autoplay(index) {
            this.timer = setInterval(() => {
                index++;
                if (index > 1) {
                    index = 0;
                }
                $('.ban_tab li').eq(index).addClass('active').siblings('li').removeClass('active');
                $('.ban_pic li').eq(index).css({
                    'opacity': 1,
                    'z-index': 1
                }).siblings('li').css({
                    'opacity': 0,
                    'z-index': 0
                })
            }, 3000);
        }
    }
    return{
        b:new Banner,
        render: function() {
            $.ajax({
                type: "get",
                url: `../../interface/getall.php`,
                dataType: "json",
                success: function(res) {
                    let temp = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        temp += `<li class="goods">
                        <a href="./details.html?id=${elm.id}">
                        <div class="wrap">

                            <img  data-original="../${pic.src}" class='lazy' width='150' height='150'>
                            <div class="box clearfix">
                                <div class="title">${elm.title}</div>
                                <div class="price">¥
                                    <span>${elm.price}</span>
                                </div>
                        </div>
                        </a>
                            <div class="hover">
                                <div class="hover_btn hover_left">
                                    <a href="#">
                                        <i class="icon"></i>
                                    </a>
                                </div>
                                <div class="hover_btn hover_right">
                                    <a href="#">找相似</a>
                                </div>
                            </div>
                        </div>
                    </li>`;
                    });
                    $('.render_ul').html(temp);
                    //  jquery懒加载
                    $('img.lazy').lazyload({
                        placeholder : "../images/lazy.gif",
                        effect:'fadeIn'
                    })
                }
            });
        },
        //倒计时
        countDown:function(){
            var intDiff = parseInt(Math.random()*1+30);//倒计时总秒数量
            let indexs=1;
            let time=null;
            
            function timer(intDiff){
                time=setInterval(function(){
                    var day=0,
                    hour=0,
                    minute=0,
                    second=0;
                if(intDiff > 0){
                    day = Math.floor(intDiff / (60 * 60 * 24));
                    hour = Math.floor(intDiff / (60 * 60));
                    minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                    second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                }
                if (hour <= 9) hour ='0'+ hour;
                if (minute <= 9) minute ='0'+ minute;
                if (second <= 9) second = '0' + second;
                $('.time_hours').html(hour);
                $('.time_minit').html(minute);
                $('.time_second').html(second);
                intDiff--;
                if(intDiff+1<0 && indexs<3){
                    indexs++;
                    intDiff = parseInt(Math.random()*1+30);
                    clearInterval(time);
                    timer(intDiff);
                    sup(indexs); 
                }
                if(intDiff+1<0 && indexs>2){
                    indexs=1;
                    intDiff = parseInt(Math.random()*1+30);
                    clearInterval(time);
                    timer(intDiff);
                    sup(indexs);
                }
                }, 1000);
                
            } 
            function sup(indexs){
                $.ajax({
                    type: "get",
                    url: "../../interface/supers.php",
                    data: `indexs=${indexs}`,
                    dataType: "json",
                    success: function (res) {
                        let item=`<li class="super_single">
                        <a href="#">
                            <img src="../images/super_single.png" alt="">
                            <div class="line">
                                <span>限时&nbsp;限量&nbsp;品质&nbsp;超值</span>
                                <span></span>
                            </div>
                            <div class="date">
                                <div class="date_title">
                                    <i class="icon"></i>
                                    <span>距离结束仅剩</span>
                                </div>
                                <div class="date_time">
                                    <span class="time_inner time_hours">00</span>
                                    <i>:</i>
                                    <span class="time_inner time_minit">00</span>
                                    <i>:</i>
                                    <span class="time_inner time_second">30</span>
                                </div>
                            </div>
                        </a>
                    </li>`
                        res.forEach(elm=>{
                            item+=`<li class="content">
                            <a href="#">
                                <div class="content_top">
                                    <img data-original="${elm.srcpic}" class='lazy' width='110' height='110' >
                                </div>
                                <div class="content_bottom">
                                    <div class="c_title">${elm.title}
                                    </div>
                                    <div class="c_bar">
                                        <div style=width:${elm.width}%;></div>
                                    </div>
                                    <div class="c_num">
                                        <div class="c_inner">
                                            <span>¥</span>
                                            <span class="c_left">${elm.discount}</span>
                                            <span class="c_before">
                                                <span>¥</span>
                                                <span class="c_left">${elm.price}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>`
                        })
                        $('.clearfix>.wrap>ul').html(item);
                        //data-original
                         //jquery懒加载
                        $('img.lazy').lazyload({
                            placeholder : "../images/lazy.gif",
                            effect:'fadeIn'
                        })
                    }
                })
            }
                timer(intDiff);
                sup(indexs);

        },
        //排名榜
        rankingList:function(){
            let arr=[0,0,0];
            $('.btn_left').on('click',function(){
                let i=$(this).attr('data-id');
                arr[i]--;
                if(arr[i]<0){
                    arr[i]=0;
                }
                if(arr[i]==0){
                    $($('.btn_left')[i]).addClass('endcolor');
                }else{
                    $($('.btn_left')[i]).removeClass('endcolor')
                }
                if(arr[i]==2){
                    $($('.btn_right')[i]).addClass('endcolor');
                }else{
                    $($('.btn_right')[i]).removeClass('endcolor')
                }
                $(this).prev().children(".sec_r_content").css({
                    left:`${-205*arr[i]}px`
                })
            });
            $('.btn_right').on('click',function(){
                let i=$(this).attr('data-id');
                arr[i]++;
                if(arr[i]>2){
                    arr[i]=2;
                }
                if(arr[i]==0){
                    $($('.btn_left')[i]).addClass('endcolor');
                }else{
                    $($('.btn_left')[i]).removeClass('endcolor')
                }
                if(arr[i]==2){
                    $($('.btn_right')[i]).addClass('endcolor');
                }else{
                    $($('.btn_right')[i]).removeClass('endcolor')
                }
                $(this).prev().prev().children(".sec_r_content").css({
                    left:`${-210*arr[i]}px`
                })
            });
        },
        //滚动跟随    搜索框接口
        qqq:function(){
            $('.up input').on('input',function(){
                $.ajax({
                    type: "get",
                    url: `https://suggest.taobao.com/sug?code=utf-8&q= + ${$('.up input').val()} + &_ksTS=1515120676355_323&callback=fn&area=c2c&bucketid=15`,
                    // data: "data",
                    dataType: "jsonp",
                    success: function (response) {
                        let htmlStr='';
                        response.result.forEach(item => {
                            // item:是result数组的每个元素
                            htmlStr+=`<li><a href='https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=${item[0]}&clk1=f57ffc90ce7c423c0dbfc4f0c81ae10c&upsid=f57ffc90ce7c423c0dbfc4f0c81ae10c'>${item[0]}</a></li>`;
                        });
                        $('#search-list').html(htmlStr);
                    }
                });
            })
        
            $(window).scroll(function(){
                if($(window).scrollTop()<=500){
                    $('aside').css({
                        position: 'absolute',
                        top: 0
                    }) 
                    $('.a_bottom').fadeOut(400);
                    
                }else{
                    $('aside').css({
                        position: 'fixed',
                        top: '130px'
                    })  
                    $('.a_bottom').fadeIn(400);
                }
            })
        
            $('.a_bottom').on('click',function(){
                $('html').animate({
                    scrollTop:0
                },500)
            })
        },
        //登录状态
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
        //搜索框搜索按钮
        sskclick:function(){
            $('.btn').on('click',function(){
                let a=$('.up input');
                if(a.val()){
                    location.href=`./productlist.html?classname=鲜&in=${a.val()}`;
                }
            })
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
})

