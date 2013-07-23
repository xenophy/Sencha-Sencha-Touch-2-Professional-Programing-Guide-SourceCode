Ext.setup({
    onReady: function() {
        // class='both' のエレメントを取得
        var els = Ext.select('.both');

        // 1度の操作で全ての要素に対する処理を実行:
        els.setStyle('border', '2px solid');

        // イテレーション
        els.each(function(el){
            cl = el.id == 'foo' ? 'red' : 'green';
            el.setStyle('border-color', cl);
        });

        // 別のCSSクラスを利用したフィルター処理:
        els.filter('.second');
        els.setStyle('background-color', 'aqua');
    }
});
