Ext.setup({
    onReady: function() {
        var handler = function () {
            Ext.Msg.prompt(
                '入力',
                'メッセージを入力してください',
                function (buttonId, value) {
                    Ext.Msg.alert(
                        '入力結果',
                        value
                    );
                }
            );
        };

        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                title: 'MessageBox',
                items: [{
                    text: 'Open',
                    handler: handler
                }]
            }]
        });
    }
});
