Ext.setup({
    onReady: function() {
        var panel = Ext.create('Ext.Panel', {
            items: [{
                xtype: 'titlebar',
                title: 'タイトル',
                docked: 'top'
            }]
        });
        Ext.Viewport.add(panel);
    }
});
