Ext.define('Camera.view.List', {
    extend: 'Ext.Container',
    requires: [
        'Ext.dataview.List'
    ],
    alias: 'widget.photolist',
    config: {
        layout: 'fit',
        items: [{
            xtype: 'list',
            store: 'Photos',
            itemTpl: '{title}',
            listeners: {
                itemtap: function(list, index, target, record) {
                    list.up('photolist').fireEvent('showitem', list, record);
                }
            }
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [{
                xtype: 'button',
                width: 120,
                text: '撮影',
                iconCls: 'camera',
                handler: function(button) {
                    button.up('photolist').fireEvent('capture');
                }
            }]
        }]
    }
});
