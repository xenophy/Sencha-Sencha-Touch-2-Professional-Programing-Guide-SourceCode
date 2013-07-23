Ext.Loader.setConfig({
    enabled: true,
    paths: {
        PL: '../../app/'
    }
});

Ext.require([
    'PL.view.PrefCard'
]);

Ext.setup({
    onReady: function() {
        console.log('component test launch');
        var cmp = Ext.create('PL.view.PrefCard');
        // パネルに設定
        cmp.setData({
            name: '東京都',
            kana: 'とうきょう',
            capital: '東京',
            capitalkana: 'とうきょう'
        });

        Ext.Viewport.add(cmp);
    }
});
