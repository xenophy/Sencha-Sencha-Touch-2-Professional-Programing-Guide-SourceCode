Ext.define('PL.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            prefCont: 'prefcard container',
            prefMap: 'prefcard map'
        },
        control: {
            preflist: {
                leafitemtap: 'onLeafItemTap'
            }
        },
        geocorder: undefined
    },

    init: function(app) {
        this.setGeocorder(new google.maps.Geocoder());
    },

    onLeafItemTap: function (nl, l, i, t, rec) {
        var me = this,
            data = rec.getData();

        // テンプレートに値をセットする
        me.getPrefCont().setData(data);
        // 県名から緯度経度を取得してセットする
        me.getGeocorder().geocode(
            { address: data.name },
            function(results, status) {
                var map = me.getPrefMap(),
                    loc = results[0].geometry.location;

                if (status == google.maps.GeocoderStatus.OK) {
                    map.setMapCenter(loc);
                }
            }
        );
    }
});

