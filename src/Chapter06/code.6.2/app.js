Ext.setup({
    onReady: function() {
        Ext.create('Ext.form.Panel', {
            padding: 18,
            fullscreen: true,
            items: [{
                xtype: 'fieldset',
                title: 'About you',
                items: [{
                    xtype: 'textfield',
                    label: 'Name',
                    name: 'name'
                }, {
                    xtype: 'emailfield',
                    label: 'E-mail',
                    name: 'email'
                }, {
                    xtype: 'textareafield',
                    label: 'Bio',
                    maxRows: 4,
                    name: 'bio'
                }]
            }]
        });
    }
});
