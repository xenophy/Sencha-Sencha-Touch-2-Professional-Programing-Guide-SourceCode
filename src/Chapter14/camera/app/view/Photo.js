Ext.define('Camera.view.Photo', {
    extend: 'Ext.Container',
    alias: 'widget.photoview',
    requires: [
        'Ext.Img'
    ],
    config: {
        layout: 'vbox',
        record: undefined,
        title: 'Photo',
        items: [{
            xtype: 'image',
            flex: 1
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            defaults: {
                width: 120
            },
            items: [{
                xtype: 'button',
                text: '撮影地',
                iconCls: 'locate',
                iconMask: true,
                handler: function(button) {
                    var view = button.up('photoview'),
                        loc = view.getRecord().get('location');

                    view.fireEvent('location', view, loc);
                }
            }, {
                xtype: 'button',
                text: '閉じる',
                handler: function(button) {
                    var view = button.up('photoview');

                    view.fireEvent('close');
                }
            }]

        }]
    },
    updateRecord: function(rec) {
        var me = this,
            img = me.down('image');

        if(rec) {
            me.setTitle(rec.get('title'));
            img.setSrc(rec.get('url'));
        }
    }
});
