Ext.setup({
    onReady: function() {
        var panel = Ext.create('Ext.Container', {
            items: [{
                xtype: 'titlebar',
                title: 'First App',
                docked: 'top'
            }],
            html: 'Hello World'
        });
        Ext.Viewport.add(panel);
    }
});
