Ext.setup({
    onReady: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                title: 'TitleBar',
                items: [{
                    text: 'One',
                    align: 'left'
                }, {
                    text: 'Two',
                    align: 'center'
                }, {
                    text: 'Three',
                    align: 'right'
                }]
            }, {
                xtype: 'toolbar',
                title: 'Toolbar',
                items: [{
                    text: 'One'
                }, {
                    text: 'Two'
                }, {
                    text: 'Three'
                }]
            }]
        });
    }
});
