Ext.setup({
    onReady: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'hbox',
            items: [
                {
                    docked: 'top',    // ドッキングを指定
                    xtype: 'panel',
                    height: 30,
                    html: 'This is docked to the top',
                    style: 'background-color: aqua'
                },
                {
                    xtype: 'panel',
                    html: 'message list',
                    style: 'background-color: yellow',
                    flex: 1
                },
                {
                    xtype: 'panel',
                    html: 'message preview',
                    flex: 2
                }
            ]
        });
    }
});
