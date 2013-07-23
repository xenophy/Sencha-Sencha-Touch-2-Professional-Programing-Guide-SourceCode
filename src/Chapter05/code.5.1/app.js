Ext.setup({
    onReady: function() {

        var listener = function (button) {
            var html = '', box = Ext.getCmp('myBox'),
                cfg = Ext.getCmp('paramform').getValues();

            if( button.getText() === 'Show' ) {
                Ext.iterate(cfg, function (key, value) {
                    html += Ext.String.format(
                        '{0}: {1}<br />',
                        key, value
                    );
                });
                box.setHtml(html);
                button.setText('Hide');
                box.show(cfg);
            } else {
                cfg.out = true;
                button.setText('Show');
                box.hide(cfg);
            }
        };

        Ext.Viewport.add({
            xtype: 'container',
            layout: 'fit',
            items: [{
                padding: 10,
                id: 'paramform',
                xtype: 'formpanel',
                defaultType: 'selectfield',
                items: [{
                    label: 'type',
                    name: 'type',
                    options: [
                        {text: 'flip',  value: 'flip'},
                        {text: 'fade',  value: 'fade'},
                        {text: 'pop',   value: 'pop'},
                        {text: 'slide', value: 'slide'}
                    ]
                },{
                    label: 'duration',
                    name: 'duration',
                    options: [
                        {text: '1秒', value: 1000},
                        {text: '2秒', value: 2000},
                        {text: '3秒', value: 3000},
                        {text: '4秒', value: 4000}
                    ]
                },{
                    label: 'direction',
                    name: 'direction',
                    options: [
                        {text: 'left',  value: 'left'},
                        {text: 'right', value: 'right'},
                        {text: 'up',    value: 'up'},
                        {text: 'down',  value: 'down'}
                    ]
                },{
                    label: 'easing',
                    name: 'easing',
                    options: [
                        {text: 'linear',      value: 'linear'},
                        {text: 'ease-in',     value: 'ease-in'},
                        {text: 'ease-out',    value: 'ease-out'},
                        {text: 'ease-in-out', value: 'ease-in-out'}
                    ]
                },{
                    xtype: 'toolbar',
                    docked: 'top',
                    items: [{
                        text: 'Show',
                        handler: listener
                    }]
                },{
                    xtype: 'panel',
                    id: 'myBox',
                    hidden: true,
                    left: 5,
                    top: 5,
                    width: 250,
                    height: 130
                }]
            }]
        });

    }
});
