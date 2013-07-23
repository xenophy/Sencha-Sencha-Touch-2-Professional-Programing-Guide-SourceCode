Ext.setup({
    onReady: function() {
        var form = Ext.create('Ext.form.Panel', {
            padding: 18,
            fullscreen: true,
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Name'
                },
                {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email'
                },
                {
                    xtype: 'passwordfield',
                    name: 'password',
                    label: 'Password'
                }
            ]
        });
    }
});
