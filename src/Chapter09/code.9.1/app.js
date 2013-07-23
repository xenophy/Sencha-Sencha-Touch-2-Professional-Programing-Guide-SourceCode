Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'PL',

    controllers: ['Main'],
    views: ['PrefList', 'PrefCard'],
    models: ['Pref'],
    stores: ['Prefs'],
    
    launch: function() {
        Ext.widget('preflist', {
            fullscreen: true,
            store: 'Prefs'
        });
    }
});
