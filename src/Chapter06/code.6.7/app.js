Ext.setup({
    onReady: function() {
        var handler = function () {
            var sheet =  Ext.create('Ext.ActionSheet', {
                hideOnMaskTap: true,
                items: [{
                    text: '保存'
                }, {
                    text: '名前をつけて保存'
                }, {
                    text: 'キャンセル',
                    ui: 'confirm',
                    handler: function(button) {
                        button.up('sheet').hide();
                    }
                }]
            });
            Ext.Viewport.add(sheet);
            sheet.show();
        };

        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                title: 'ActionSheet',
                items: [{
                    text: 'Open',
                    handler: handler
                }]
            }]
        });
    }
});
