Ext.setup({
    onReady: function() {

        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                PL: 'app'
            }
        });

        Ext.require(
            [
                'PL.store.Prefs',
                'PL.view.PrefList'
            ],
            function () {
                Ext.create('PL.store.Prefs', {
                    storeId: 'Prefs'
                });
                Ext.create('PL.view.PrefList', {
                    fullscreen: true,
                    store: 'Prefs'
                });
            }
        );

    }
});
