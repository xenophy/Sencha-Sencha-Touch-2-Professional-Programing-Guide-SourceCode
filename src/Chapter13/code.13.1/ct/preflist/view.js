Ext.Loader.setConfig({
    enabled: true,
    paths: {
        PL: '../../app/'
    }
});

Ext.require([
    'PL.store.Prefs',
    'PL.view.PrefList'
]);

Ext.setup({
    onReady: function() {
        console.log('component test launch');
        Ext.create('PL.store.Prefs', {
            storeId: 'Prefs',
            proxy: {
                type: 'ajax',
                url: '../../nestedlist.json'
            }
        }).load({
            callback: function() {
                var cmp = Ext.create('PL.view.PrefList');
                Ext.Viewport.add(cmp);
            }
        });
    }
});
