Ext.setup({
    onReady: function() {
        // Ext.createでインスタンス化
        var panel = Ext.create('Ext.Panel', {
            html: 'This is my Panel'
        });

        // このコンテナーを表示するには、Viewportに追加します。
        Ext.Viewport.add(panel);
    }
});
