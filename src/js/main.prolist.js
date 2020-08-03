require.config({
    paths: {
        jquery: './jquery.min',
        porlist: './lib1/prolist',
        cookie: './lib1/cookie'
    }
});

require(['porlist'], function(prolist) {
    let ins =decodeURI(location.search.split("=")[1]);
    console.log(ins)
    if(ins=='鲜'){
        prolist.render();
    }else{
        prolist.render1();
    }
    prolist.state();
    prolist.exit();
    prolist.tabs();
    prolist.dizhi();
});
