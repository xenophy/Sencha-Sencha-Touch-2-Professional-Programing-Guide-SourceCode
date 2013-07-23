Ext.setup({
    onReady: function() {

        var mainPanel = Ext.create('Ext.Panel', {
            fullscreen: true,

            layout: 'hbox',
            defaults: {
                flex: 1
            },

            items: [{
                xtype: 'panel',
                html: 'First Panel'
            }, {
                xtype: 'panel',
                html: 'Second Panel'
            }, {
                xtype: 'list',
                itemTpl: '{title}',
                data: [
                    { title: 'Item 1' },
                    { title: 'Item 2' }
                ]
            }]
        });

        var panels = mainPanel.query('panel');  // *1 
        var listA = mainPanel.query('list')[0]; // *2 
        var listB = mainPanel.down('list');     // *3
        var panel = listA.up('panel');          // *4
        console.dir(panels);
        console.dir(listA);
        console.dir(listB);
        console.dir(panel);
    }
});
