StartTest(function(t) {
    t.diag('PrefCard');
    card = Ext.create('PL.view.PrefCard',{
        fullscreen: true
    });
    card.setData({
        name: '東京都',
        kana: 'とうきょう',
        capital: '東京',
        capitalkana: 'とうきょう',
        leaf: true
    });
    
    t.chain(
        { action : 'wait', delay : 1500 },
        { action : 'drag', source : '>>map', by : [-100, -100] },
        { action : 'wait', delay : 1500 }
    );

});


