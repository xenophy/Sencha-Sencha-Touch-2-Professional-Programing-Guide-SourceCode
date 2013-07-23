Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'PL',

    profiles: ['Phone', 'Tablet'],
    controllers: ['Main'],
    views: ['PrefList', 'PrefCard'],
    models: ['Pref'],
    stores: ['Prefs']
    
});
