Ext.setup({
    onReady: function() {

        var panel = Ext.widget('panel',{
            layout: 'fit',
            items: [ {
                id: 'myTitle',  // タイトルバーにidを指定した
                xtype: 'titlebar',
                docked: 'top',
                title: 'Ext JS'
            } ]
        });
        Ext.Viewport.add(panel);
        // idでタイトルバーを取得してタイトルを変更
        Ext.getCmp('myTitle').setTitle('Sencha Touch');
    }
});
