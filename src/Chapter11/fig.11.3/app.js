Ext.setup({
    onReady: function() {
        
        var panel = Ext.widget('panel', {
            layout: 'fit',
            items: [{
                xtype: 'draw',
                items: [{
                    type: 'sector',
                    strokeStyle: '#000',
                    fillStyle: '#ccc',
                    lineWidth: 2,
                    centerX: 200,
                    centerY: 100,
                    startAngle: 0,
                    startRho: 30,
                    endRho: 70,
                    endAngle: Math.PI / 2
                }]
            }],
            fullscreen: true
        });

    }
});
