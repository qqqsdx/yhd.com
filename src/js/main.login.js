require.config({
    paths: {
        jquery: './jquery.min',
        login: './lib1/login',
        cookie: './lib1/cookie'
    }
});

require(['login'], function(login) {
    login.render();
});

