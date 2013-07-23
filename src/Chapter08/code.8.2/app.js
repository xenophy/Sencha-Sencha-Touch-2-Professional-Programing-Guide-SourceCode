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
        var prefCard = Ext.widget('prefcard', {
            flex: 1
        });
        Ext.widget('container', {
            layout: 'hbox',
            fullscreen: true,
            items: [{
                xtype: 'preflist',
                detailContainer: prefCard,
                detailCard: true,
                width: 200

            }, 
                prefCard
            ]
        });

    }
});
