Ext.setup({
    onReady: function() {
        var titlebar = Ext.create('Ext.TitleBar', {
            title: 'タイトル',
            docked: 'top'
        });
        var panel = Ext.create('Ext.Panel', {
            items: [
                titlebar
            ]
        });
        Ext.Viewport.add(panel);
    }
});
