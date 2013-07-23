Ext.setup({
    onReady: function() {
        Ext.create('Ext.form.Panel', {
            padding: 18,
            fullscreen: true,
            items: [{
                xtype: 'numberfield',
                label: 'Number',
                name: 'number'
            }, {
                xtype: 'spinnerfield',
                label: 'Spinner',
                name: 'spinner'
            }, {
                xtype: 'sliderfield',
                label: 'Slider',
                name: 'slider'
            }]
        });
    }
});
