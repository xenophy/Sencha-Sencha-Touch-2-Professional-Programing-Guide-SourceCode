Ext.define('Camera.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'Camera.view.List',
        'Camera.store.Photos'
    ],
    config: {
        items: [{
            title: 'List',
            xtype: 'photolist'
        }]
    }
});
