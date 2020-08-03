require.config({
    paths: {
        jquery: './jquery.min',
        registry: './lib1/registry',
    }
});

require(['registry'], function(registry) {
    registry.render();
});

