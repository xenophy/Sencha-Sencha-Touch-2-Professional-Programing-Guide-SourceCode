Ext.define('PL.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            '': 'goHome',
            'pref/:id': 'showPref'
        },
        before: {
            'showPref': [
                'ensureLoaded',
                'checkPrefId'
            ]
        },
        refs: {
            prefList: 'preflist',
            prefCard: 'prefcard'
            //prefCont: 'prefcard container',
            //prefMap: 'prefcard map'
        },
        control: {
            preflist: {
                itemtap: 'onItemTap',
                back: 'onBack'
            }
        },
        geocorder: undefined
    },

    ERR_TITLE : 'エラー',
    ERR_INVALID_ID : '指定した情報はありませんでした',

    /*init: function(app) {
        this.setGeocorder(new google.maps.Geocoder());
    },*/

    goHome: function() {
        var me = this,
            nl = me.getPrefList(),
            store = Ext.getStore('Prefs');

        nl.goToNode(store.getRoot());
    },

    showPref: function (id) {
        var me = this,
            nl = me.getPrefList(),
            store = Ext.getStore('Prefs'),
            rec = store.getNodeById(id);

        if( rec.get('leaf') ) {
            nl.goToLeaf(rec);
            me.showDetail(rec);
        } else {
            nl.goToNode(rec);
        }
    },

    showDetail: function(rec) {
        var me = this,
            data = rec.getData();

        // テンプレートに値をセットする
        me.getPrefCard().setData(data);
        // 県名から緯度経度を取得してセットする
        /*me.getGeocorder().geocode(
            { address: data.name },
            function(results, status) {
                var map = me.getPrefMap(),
                    loc = results[0].geometry.location;

                if (status == google.maps.GeocoderStatus.OK) {
                    map.setMapCenter(loc);
                }
            }
        );*/
    },
    
    onItemTap: function (nl, l, i, t, rec) {
        this.redirectTo(rec);
    },

    onBack: function(nl, node, lastActiveList, detailCardActive) {
        var rec = nl.getLastNode();

        if( detailCardActive ) {
            rec = rec.parentNode;
        }

        if( rec.isRoot() ) {
            this.redirectTo('');
        } else {
            this.redirectTo(rec);
        }
    },

    ensureLoaded: function (action) {
        var me = this,
            store = Ext.getStore('Prefs'),
            fn = function() {
                action.resume();
                store.un('load', fn);
            };

        // Storeがロード中の場合には待つ
        if( store.isLoading() ){
            store.on('load', fn);
        } else {
            action.resume();
        }
    },

    checkPrefId: function(action) {
        var me = this,
            id = action.getArgs()[0],
            rec = Ext.getStore('Prefs').getNodeById(id);
        
        if( !rec ) {
            Ext.Msg.alert(me.ERR_TITLE, me.ERR_INVALID_ID);
            me.redirectTo('');
        }
        action.resume();
    }
});

