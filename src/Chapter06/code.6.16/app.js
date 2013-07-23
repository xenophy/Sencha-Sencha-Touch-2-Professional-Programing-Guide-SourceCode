Ext.setup({
    onReady: function() {
        
    var tpl = Ext.create('Ext.XTemplate', 
        '<p>価格表</p>',
        '<table border="1px">',
            '<tr>',
                '<th>商品名</th>',
                '<th>価格</th>',
                '<th>消費税</th>',
            '</tr>',
            '<tpl for=".">',
                '<tr>',
                    '<td>{product}</td>',
                    '<td>{price}</td>',
                    '<td>{[this.getTax(values.price)]}</td>',
                '</tr>',
            '</tpl>',
        '</table>',
        {
            getTax: function (value) {
                return Math.round(value * 0.05);
            }
        }
    );

    tpl.overwrite(document.body, [
        {product: 'ノートパソコン', price: 108010},
        {product: 'テレビ', price: 98000},
        {product: 'エアコン', price: 210000}
    ]);

    }
});
