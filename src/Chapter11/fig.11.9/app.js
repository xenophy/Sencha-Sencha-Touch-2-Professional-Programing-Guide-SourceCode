Ext.setup({
    onReady: function() {
        
        var panel = Ext.widget('panel', {
            layout: 'fit',
            items: [{
                xtype: 'draw',
                items: [{
                    type: 'path',
                    strokeStyle: '#000',
                    fillStyle: '#ccc',
                    lineWidth: 2,
                    path: 'M 10,10 L 100,10 100,25 20,90 100,90 100,100 10,100 10,85 90,20 10,20 Z',
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
