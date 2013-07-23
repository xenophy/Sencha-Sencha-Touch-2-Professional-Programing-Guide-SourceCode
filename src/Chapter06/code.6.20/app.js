Ext.setup({
    onReady: function() {

        Ext.define('Pref', {
            extend: 'Ext.data.Model',
            config :{
                fields: [
                    'name', 'kana', 'capital', 'capitalkana', 'leaf'
                ],
                proxy: {
                    type: 'ajax',
                    url: 'nestedlist.json'
                }
            }
        });

        Ext.create('Ext.data.TreeStore', {
            model: 'Pref',
            autoLoad: true,
            storeId: 'Prefs',
            defaultRootProperty: 'data'
        });

        Ext.create('Ext.dataview.NestedList', {
            fullscreen: true,
            store: 'Prefs',
            displayField: 'name',
            listConfig: {
                variableHeights: true
            },
            detailCard: {
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
                    useCurrentLocation: false
                }]
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
        });
    }
});
