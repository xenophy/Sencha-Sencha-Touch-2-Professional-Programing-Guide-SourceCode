Ext.define('Camera.view.Map', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Map'
    ],
    alias: 'widget.locmap',
    config: {
        layout: 'fit',
        location: undefined,
        items: [{
            xtype: 'map',
            useCurrentLoacation: false
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
                text: '閉じる',
                handler: function(button) {
                    var view = button.up('locmap');

                    view.fireEvent('close');
                }
            }]
        }]

    },

    updateLocation: function(location) {
        var me = this,
            map = me.down('map'),
            gloc = new google.maps.LatLng(
                location.coords.latitude,
                location.coords.longitude
            );
        map.setMapCenter(gloc);
    }
});
