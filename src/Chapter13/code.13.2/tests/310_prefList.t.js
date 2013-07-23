StartTest(function(t) {
    t.diag("PrefList");
    Ext.create('PL.store.Prefs',{
        storeId: 'Prefs'
    });

    list = Ext.create('PL.view.PrefList',{
        fullscreen: true
    });
    t.waitForSelector(".x-list-item", function () {
        var tapFirst = {
            action : 'tap',
            target : '.x-list:not(.x-item-hidden) .x-list-item-first'
        };
        t.chain(
            tapFirst,
            { action : 'wait', delay : 500 },
            tapFirst,
            { action : 'wait', delay : 500 },
            function (next) {
                var sel = list.getActiveItem().selected;

                t.is(sel.getCount(), 1, '1 item selected');
                t.is(sel.first().get('name'), '北海道', '選択したアイテムは"北海道"');

                next();
            },
            { action : 'tap', target : '>>[ui=back]' },
            function (next) {
                var sel = list.getActiveItem().selected;

                t.is(sel.getCount(), 0, 'No item selected');

                next();
            }
        );
    });
            
});

