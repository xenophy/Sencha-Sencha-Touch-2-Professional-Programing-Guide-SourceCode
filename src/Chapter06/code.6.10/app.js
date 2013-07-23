Ext.setup({
    onReady: function() {
        var handler = function () {
            var picker = Ext.create('Ext.picker.Date', {
                value: new Date(),
                yearFrom: 2011,
                yearTo: 2014
            });
            Ext.Viewport.add(picker);
            picker.show();
        };

        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                title: 'DatePicker',
                items: [{
                    text: 'Open',
                    handler: handler
                }]
            }]
        });
    }
});
