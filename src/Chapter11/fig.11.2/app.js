Ext.setup({
    onReady: function() {
        
        var panel = Ext.widget('panel', {
            layout: 'fit',
            items: [{
                xtype: 'draw',
                items: [{
                    type: 'arc',
                    strokeStyle: '#000',
                    fillStyle: '#ccc',
                    lineWidth: 2,
                    cx: 200,
                    cy: 100,
                    r: 70,
                    startAngle: 0,
                    endAngle: Math.PI / 2
                }]
            }],
            fullscreen: true
        });

    }
});
