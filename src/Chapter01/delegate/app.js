Ext.define('MyApp.MyContainer', {
    extend: 'Ext.Container',

    config: {
        layout: 'vbox',

        defaults: {
            xtype: 'button'
        },
        listeners: {
            delegate: 'button',
            tap: function(button) {
                console.log(button.getText());
            }
        },
        items: [{
            text: 'ONE'
        }, {
            text: 'TWO'
        }, {
            text: 'THREE'
        }]
    }
});

Ext.setup({
    onReady: function() {
        //var cont = Ext.create('MyApp.MyContainer');

        Ext.Viewport.add({
            xtype: 'container',
            layout: 'vbox',

            defaults: {
                xtype: 'button'
            },
            listeners: {
                delegate: 'button',
                tap: function(button) {
                    console.log(button.getText());
                }
            },
            items: [{
                text: 'ONE'
            }, {
                text: 'TWO'
            }, {
                text: 'THREE'
            }]

        });
    }
});
