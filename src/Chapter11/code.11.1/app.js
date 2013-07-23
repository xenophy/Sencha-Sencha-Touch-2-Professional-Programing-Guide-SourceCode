Ext.setup({
    onReady: function() {
        
        var panel = Ext.widget('panel', {
            layout: 'fit',
            items: [{
                xtype: 'draw'
            }],
            fullscreen: true
        });

        var cmp = new Ext.draw.sprite.Composite();
        cmp.add({
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
        });
        cmp.add({
            type: 'rect',
            strokeStyle: '#000',
            fillStyle: '#999',
            lineWidth: 2,
            x: 20,
            y: 20,
            width: 280,
            height: 130,
            radius: 10
        });
        panel.down('draw').getSurface().add(cmp);
        cmp.fx.setDuration(500);
        cmp.setAttributes({
            translationX: 100,
            translationY: 30
        });

    }
});
