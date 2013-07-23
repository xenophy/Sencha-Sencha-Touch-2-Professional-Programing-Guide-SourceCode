Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'PL',

    requires: [
        'PL.view.PrefCard',
        'PL.view.PrefList'
    ],
    controllers: ['Main'],
    views: ['PrefList', 'PrefCard'],
    models: ['Pref'],
    stores: ['Prefs'],
    
    launch: function() {
        Ext.widget('preflist', {
            fullscreen: true,
            store: 'Prefs',
            detailCard: {
                xtype: 'prefcard'
            }
        });
    }
});
