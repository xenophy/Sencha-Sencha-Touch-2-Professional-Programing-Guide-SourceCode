Ext.define('Camera.view.Preview', {
    extend: 'Ext.Container',
    alias: 'widget.preview',
    requires: [
        'Ext.Img',
        'Ext.form.Panel'
    ],
    config: {
        layout: 'vbox',
        photo: undefined,
        items: [{
            xtype: 'formpanel',
            height: 100,
            items: [{
                xtype: 'textfield',
                label: 'タイトル'
            }]
        }, {
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
                text: '保存',
                handler: function(button) {
                    var list = button.up('preview'),
                        title = list.down('textfield').getValue();

                    list.fireEvent('save', list, title);
                }
            }, {
                xtype: 'button',
                text: 'キャンセル',
                handler: function(button) {
                    button.up('preview').fireEvent('cancel');
                }
            }]
        }]
    },

    updatePhoto: function(photo) {
        var me = this,
            img = me.down('image');

        if(photo) {
            img.setSrc(photo.url);
        }
    }

});
