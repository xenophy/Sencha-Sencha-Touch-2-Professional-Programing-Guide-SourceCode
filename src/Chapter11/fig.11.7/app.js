Ext.setup({
    onReady: function() {
        
        var panel = Ext.widget('panel', {
            layout: 'fit',
            items: [{
                xtype: 'draw',
                items: [{
                    type: 'image',
                    x: 10,
                    y: 10,
                    width: 372,
                    height: 140,
                    src: 'http://www.sencha.com/img/sencha-large.png'
                }]
            }],
            fullscreen: true
        });

    }
});
