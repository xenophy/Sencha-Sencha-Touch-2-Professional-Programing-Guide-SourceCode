Ext.setup({
    onReady: function() {

        // モデルを定義します
        Ext.define('Image', {
            extend: 'Ext.data.Model',
            config: {
                proxy: {
                    type: 'ajax',
                    url: 'dataview.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'data'
                    }
                },
                fields: [
                    { name:'image', type:'string' },
                    { name:'title', type:'string' },
                    { name:'caption', type:'string' }
                ]
            }
        });

        // ストアを生成します
        var store = Ext.create('Ext.data.Store', {
            model: 'Image',
            autoLoad: true
        });
        
        // テンプレートを生成します
        var imageTpl = new Ext.XTemplate(
            '<div class="thumb-wrap">',
              '<img src="{image}" />',
              '<h2>{title}</h2>',
            '</div>'
        );

        // データビューを生成します
        Ext.Viewport.add({
            xtype: 'dataview',
            store: store,
            itemTpl: imageTpl,
            emptyText: 'No images available',
            renderTo: Ext.getBody()
        });

    }
});
