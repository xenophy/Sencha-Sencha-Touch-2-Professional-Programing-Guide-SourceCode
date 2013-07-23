Ext.setup({
    onReady: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                defaults: {
                    bubbleEvents: ['tap']
                },
                listeners: {
                    tap: function (cmp, e) {
                        Ext.Msg.alert('Tapped', cmp.getText());
                    }
                },
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
