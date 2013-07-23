Ext.setup({
    onReady: function() {
        Ext.create('Ext.form.Panel', {
            padding: '1em',
            fullscreen: true,
            items: [{
                xtype: 'datepickerfield',
                label: 'Date',
                name: 'date',
                value: new Date(),
                dateFormat: 'Y-m-d',
                picker: {
                    slotOrder: ['year', 'month', 'day']
                }
            }]
        });
    }
});
