Ext.setup({
    onReady: function() {

        var store = Ext.create('Ext.data.Store', {
            fields: ['kanji', 'kana'],
            sorters: 'kana',
            grouper: {
                groupFn: function(record) {
                    return record.get('kana')[0];
                }
            },
            data: [
                { kanji: '小泉純一郎', kana: 'こいずみじゅんいちろう'  },
                { kanji: '安倍晋三',   kana: 'あべしんぞう'  },
                { kanji: '福田康夫',   kana: 'ふくだやすお' },
                { kanji: '麻生太郎',   kana: 'あそうたろう'  },
                { kanji: '菅直人',     kana: 'かんなおと'   },
                { kanji: '鳩山由紀夫', kana: 'はとやまゆきお'  },
                { kanji: '野田佳彦',   kana: 'のだよしひこ'  }
            ]
        });

        Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '{kanji}',
            store: store,
            indexBar: {
                letters: ['あ','か','さ','た','な','は','ま','や','ら','わ']
            },
            grouped: true
        });

    }
});
