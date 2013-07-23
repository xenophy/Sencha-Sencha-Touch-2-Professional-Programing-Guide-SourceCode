Ext.setup({
    onReady: function() {
        Ext.create('Ext.form.Panel', {
            padding: '1em',
            fullscreen: true,
            items: [{
                xtype: 'checkboxfield',
                label: 'Checkbox',
                name: 'checkbox'
            }, {
                xtype: 'radiofield',
                label: 'Radio1',
                name: 'radio'
            }, {
                xtype: 'radiofield',
                label: 'Radio2',
                name: 'radio'
            }, {
                xtype: 'radiofield',
                label: 'Radio3',
                name: 'radio'
            }, {
                xtype: 'togglefield',
                label: 'Toggle',
                name: 'toggle'
            }]
        });
    }
});
