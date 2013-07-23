Ext.define('PL.view.PrefCard', {
    extend: 'Ext.Container',
    alias: 'widget.prefcard',
    config: {
        xtype: 'container',
        layout: 'vbox',
        items: [{
            height: 70,
            xtype: 'container',
            tpl: [
                '<div class="thumb-wrap">',
                  '<h2>{name}({kana})</h2>',
                  '<div>',
                    '{[values.name[values.name.length-1]]}',
                    '庁所在地：',
                    '{capital}({capitalkana})',
                  '</div>',
                '</div>'
            ]
        }, {
            flex: 1,
            xtype: 'map',
            useCurrentLoacation: false
        }]
    },

    setData: function(newData) {
        var me = this,
            map = me.down('map'),
            geocorder = new google.maps.Geocoder();

        me.down('container').setData(newData);
        geocorder.geocode(
            { address: newData.name },
            function(results, status) {
                var loc = results[0].geometry.location;

                if (status == google.maps.GeocoderStatus.OK) {
                    map.setMapCenter(loc);
                }
            }
        );
        
    }
});
