require.config({
    paths: {
        jquery: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery',
        // jquery:'./jquery.min',
        index: './lib1/index',
        cookie: './lib1/cookie',
        lazy:'https:cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload'
        // lazy:'./jquery.lazyload'
    },
    shim:{
        lazy:['jquery']
    },
    waitSeconds: 60
});

require(['index'], function(index,) {
    index.b.init();
    index.countDown();
    index.qqq();
    index.sskclick()
    index.state();
    index.exit();
    index.rankingList();
    index.render();
});

