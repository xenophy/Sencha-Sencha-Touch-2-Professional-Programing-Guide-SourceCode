Ext.setup({
    onReady: function() {
        
        var panel = Ext.widget('panel', {
            layout: 'fit',
            items: [{
                xtype: 'draw',
                items: [{
                    type: 'rect',
                    strokeStyle: '#000',
                    fillStyle: '#ccc',
                    lineWidth: 2,
                    x: 10,
                    y: 10,
                    width: 300,
                    height: 150,
                    radius: 10,
                    shadowOffsetX: 25,
                    shadowOffsetY: 20,
                    shadowColor: '#888',
                    shadowBlur: 20
                }]
            }],
            fullscreen: true
        });

    }
});
