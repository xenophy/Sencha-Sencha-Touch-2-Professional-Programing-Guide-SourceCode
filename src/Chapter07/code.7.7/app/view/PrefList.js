Ext.define('PL.view.PrefList', {
    extend: 'Ext.dataview.NestedList',
    requires: ['PL.view.PrefCard'],
    config: {
        store: 'Prefs',
        displayField: 'name',
        listConfig: {
            variableHeights: true
        },
        detailCard: {
            xtype: 'prefcard'
        },
        listeners: {
            leafitemtap: function (nl, l, i, t, rec) {
                var data = rec.getData(),
                    geocorder = new google.maps.Geocoder();
                    card = nl.getDetailCard();

                // テンプレートに値をセットする
                card.down('container').setData(data);
                // 県名から緯度経度を取得してセットする
                geocorder.geocode(
                    { address: data.name },
                    function(results, status) {
                        var map = card.down('map'),
                            loc = results[0].geometry.location;

                        if (status == google.maps.GeocoderStatus.OK) {
                            map.setMapCenter(loc);
                        }
                    }
                );
            }
        }
    }
});
