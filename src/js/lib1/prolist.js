define(['jquery', 'cookie'],function($,cookie){
    return{
        render: function() {
            $.ajax({
                type: "get",
                url: '../../interface/porlist.php',
                dataType: "json",
                success: function(res) {
                    let lifting=true;
                    let temp = '';
                    let ress;
                    ress=res.sort(compare('price',lifting));
                    $($('.synthesize ul li a')[4]).on('click',function(){
                        lifting=!lifting;
                        if(lifting){
                            $(this).html('价格 ↑');
                            ress=res.sort(compare('price',lifting));
                            xuanran();
                        }else{
                            $(this).html('价格 ↓');
                            ress=res.sort(compare('price',lifting));
                            xuanran();
                        }
                    })
                    //给价格区间确定按钮添加事件
                    $('.section').on('click',function(){
                        let a=$('.sectionMin').val();
                        let b=$('.sectionMax').val();
                        if(a && b){
                            sections(a,b);
                        }else{
                            alert('请输入价格区间')
                        }
                    })
                    function xuanran(){
                        temp='';
                        ress.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            temp += `<li class="goods">
                            <a href="./details.html?id=${elm.id}">
                            <div class="wrap">
    
                                <img src="../${pic.src}" alt="">
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
                    }
                    xuanran();
                    //遍历价格排序封装
                    function compare(property,lifting){
                        return function(a,b){
                        var value1 = a[property];
                        var value2 = b[property];
                        if(lifting){
                            return value1 - value2;
                        }else{
                            return value2 - value1;
                        }
                        }    
                    }
                    //价格区间封装
                    function sections(a,b){
                        ress=res.filter((item)=>{
                            if(item.price>Number(a) && item.price<Number(b)){
                                return item;
                            }
                        })
                        xuanran();
                    }
                }
            });
        },
        render1:function(){
            let ins =decodeURI(location.search.split("&")[1].split('=')[1]);
            $.ajax({
                type: "get",
                url: `../../interface/sskname.php?in=${ins}`,
                dataType: "json",
                success: function(res) {
                    let lifting=true;
                    let temp = '';
                    res=res.sort(compare('price',lifting));
                    $($('.synthesize ul li a')[4]).on('click',function(){
                        lifting=!lifting;
                        if(lifting){
                            $(this).html('价格 ↑');
                            res=res.sort(compare('price',lifting));
                            xuanran();
                        }else{
                            $(this).html('价格 ↓');
                            res=res.sort(compare('price',lifting));
                            xuanran();
                        }
                    })
                    //给价格区间确定按钮添加事件
                    $('.section').on('click',function(){
                        let a=$('.sectionMin').val();
                        let b=$('.sectionMax').val();
                        if(a && b){
                            sections(a,b);
                        }else{
                            alert('请输入价格区间')
                        }
                    })
                    function xuanran(){
                        temp='';
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            temp += `<li class="goods">
                            <a href="./details.html?id=${elm.id}">
                            <div class="wrap">
    
                                <img src="../${pic.src}" alt="">
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
                    }
                    xuanran();
                    //遍历价格排序封装
                    function compare(property,lifting){
                        return function(a,b){
                        var value1 = a[property];
                        var value2 = b[property];
                        if(lifting){
                            return value1 - value2;
                        }else{
                            return value2 - value1;
                        }
                        }    
                    }
                    //价格区间封装
                    function sections(a,b){
                        res=res.filter((item)=>{
                            if(item.price>a && item.price<b){
                                return item;
                            }
                        })
                        xuanran();
                    }
                }
            });
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
        },
        tabs:function(){
            $('#tabs>ul>li').on('click', function() {
                let index = $('#tabs>ul>li').index(this);
                $(this).addClass('actived').siblings().removeClass('actived');
                $('#tabs>div').eq(index).addClass('show').siblings().removeClass('show');
            });
        },
        dizhi:function(){
            $.ajax({
                type: "get",
                url: "http://www.rootbk.cn:3000/interface",
                data: {
                    app: 'city'
                },
                dataType: "jsonp",
                success: function(res) {
                    let data=res.data;
                    let sheng='';
                    let shi='';
                    let xian='';
                    //从数据中遍历
                    $.each(data,function(index,val){
                        if($($('#tabs>ul>li')[0]).html() == val.name){
                            sheng+=`<a href="javascript:;" class='and'>${val.name}</a>`;
                            //在原来遍历的基础上选择选中数据的内层数据
                            $.each(val.city,function(i,v){
                                if($($('#tabs>ul>li')[1]).html() == v.name){
                                    shi+=`<a href="javascript:;" class='and'>${v.name}</a>`;
                                    //最底层区县数据
                                    $.each(v.area,function(i1,v1){
                                        if($($('#tabs>ul>li')[2]).html() == v1){
                                            xian+=`<a href="javascript:;" class='and'>${v1}</a>`;
                                        }
                                            xian+=`<a href="javascript:;" >${v1}</a>`
                                    })
                                }
                                    shi+=`<a href="javascript:;" >${v.name}</a>`
                            })
                        }
                        sheng+=`<a href="javascript:;" >${val.name}</a>`
                        
                    })
                    $($('#tabs>div')[0]).html(sheng);
                    $($('#tabs>div')[1]).html(shi);
                    $($('#tabs>div')[2]).html(xian);
                    
                    //省份选择
                    $($('#tabs>div')[0]).children('a').on('click',function(){
                        let chengshi='';
                        let quxian='';
                        $($('#tabs>ul>li')[0]).html($(this).html());
                        $($('#tabs>ul>li')[1]).html('请选择城市');
                        $($('#tabs>ul>li')[2]).html('请选择县区');
                        $(this).addClass('and').siblings().removeClass('and');
                        $.each(data,(index,value)=>{
                            if(value.name == $(this).html()){
                                shi='';
                                $.each(value.city,(ind,val)=>{
                                    shi+=`<a href="javascript:;">${val.name}</a>`;
                                })
                                $($('#tabs>div')[1]).html(shi);
                                chengshi=value.city;
                            }
                            
                        })
                        //城市选择
                        $($('#tabs>div')[1]).children('a').on('click',function(){
                            $($('#tabs>ul>li')[1]).html($(this).html());
                            $($('#tabs>ul>li')[2]).html('请选择县区');
                            $(this).addClass('and').siblings().removeClass('and');
                            $.each(chengshi,(index,value)=>{
                                if(value.name == $(this).html()){
                                    xian='';
                                    $.each(value.area,(ind,val)=>{
                                        xian+=`<a href="javascript:;">${val}</a>`;
                                    })
                                    $($('#tabs>div')[2]).html(xian);
                                }
                            })
                            //最后的区县点击事件点击后打印
                            $($('#tabs>div')[2]).children('a').on('click',function(){
                                $($('#tabs>ul>li')[2]).html($(this).html());
                                $(this).addClass('and').siblings().removeClass('and');
                                $($('.site span div')[0]).html(`
                                    ${$($('#tabs>ul>li')[0]).html()}
                                    ${$($('#tabs>ul>li')[1]).html()}
                                    ${$($('#tabs>ul>li')[2]).html()}
                                    `
                                )
                            })
                        })
                    })  
                }
            });
        }
       
    }
})

