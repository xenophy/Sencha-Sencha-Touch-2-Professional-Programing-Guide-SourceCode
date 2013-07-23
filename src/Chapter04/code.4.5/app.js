Ext.setup({
    onReady: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'hbox',
            items: [{
                xtype: 'container',
                flex: 1,
                html: 'flex:1',
                style: {
                    'background-color': '#fff'
                }
            }, {
                xtype: 'container',
                flex: 2,
                html: 'flex:2'
            }]
        });
    }
});
