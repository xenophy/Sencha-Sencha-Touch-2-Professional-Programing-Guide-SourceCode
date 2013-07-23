Ext.setup({
    onReady: function() {
        Ext.create('Ext.form.Panel', {
            padding: '1em',
            fullscreen: true,
            items: [{
                xtype: 'selectfield',
                label: 'Select',
                name: 'select',
                options: [{
                    text: 'iOS', value: '1'
                },{
                    text: 'Android', value: '2'
                },{
                    text: 'Other', value: '9'
                }]
            }]
        });
    }
});
