StartTest(function(t) {
    var storeName = 'PL.store.Prefs';
    t.requireOk(storeName, function() {
        var s = Ext.create(storeName),
            async = t.beginAsync();

        s.load({
            callback: function() {
                var m;

                t.pass('loaded');
                m = s.getNode().getChildAt(0).getChildAt(0);
                t.is(m.get('name'), '北海道', '最初の県');
                m = s.getNode().getChildAt(2).getChildAt(0);
                t.is(m.get('name'), '茨城県', '関東最初の県');
                t.endAsync(async);
            }
        });
        
    });
});
