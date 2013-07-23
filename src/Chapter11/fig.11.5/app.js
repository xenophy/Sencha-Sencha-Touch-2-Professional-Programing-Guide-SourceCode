Ext.setup({
    onReady: function() {
        
        var panel = Ext.widget('panel', {
            layout: 'fit',
            items: [{
                xtype: 'draw',
                items: [{
                    type: 'ellipticalArc',
                    strokeStyle: '#000',
                    fillStyle: '#ccc',
                    lineWidth: 2,
                    cx: 200,
                    cy: 100,
                    rx: 140,
                    ry: 70,
                    startAngle: 0,
                    endAngle: Math.PI,
                    anticlockwise: true
                }]
            }],
            fullscreen: true
        });

    }
});
