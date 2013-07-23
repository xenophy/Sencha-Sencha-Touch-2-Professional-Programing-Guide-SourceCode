Ext.setup({
    onReady: function() {
        var genData = function (from, to, post) {
            var r=[];
            for(var i=from; i<=to; i++) {
                r.push({
                    text: i + post,
                    value: i
                });
            }
            return r;
        };

        var handler = function () {
            var picker = Ext.create('Ext.picker.Picker', {
                toolbar: {
                    title: '有効期限'
                },
                doneButton: '実行',
                cancelButton: {
                    text: 'キャンセル',
                    ui: 'decline'
                },
                hideOnMaskTap: true,
                slots: [{
                    title: '年',
                    name: 'year',
                    data: genData(2013, 2020, '年')
                }, {
                    title: '月',
                    name: 'month',
                    data: genData(1, 12, '月')
                }],
                listeners: {
                    change: function (comp, values) {
                        console.log(values);
                    }
                }
            });
            Ext.Viewport.add(picker);
            picker.show();
        };

        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                title: 'Picker',
                items: [{
                    text: 'Open',
                    handler: handler
                }]
            }]
        });
    }
});
