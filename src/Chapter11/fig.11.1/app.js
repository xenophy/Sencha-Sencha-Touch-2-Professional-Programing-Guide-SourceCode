Ext.setup({
    onReady: function() {
        
        var panel = Ext.widget('panel', {
            layout: 'fit',
            items: [{
                xtype: 'draw',
                items: [{
                    type: 'circle',
                    strokeStyle: '#000',
                    fillStyle: '#ccc',
                    lineWidth: 2,
                    cx: 200,
                    cy: 100,
                    r: 70,
                    shadowOffsetX: 15,
                    shadowOffsetY: 10,
                    shadowColor: '#888',
                    shadowBlur: 20
                }]
            }],
            fullscreen: true
        });

    }
});
