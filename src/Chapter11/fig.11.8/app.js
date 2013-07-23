Ext.setup({
    onReady: function() {
        
        var conf = {
            type: 'text',
            x: 10,
            y: 40,
            text: 'Hello',
            fontSize: '20px'
        };
        var panel = Ext.widget('panel', {
            layout: 'fit',
            items: [{
                xtype: 'draw',
                items: [{
                    type: 'path',
                    path: 'M0,40 L460,40',
                    strokeStyle: 'red'
                }, {
                    type: 'text',
                    x: 10, y: 40, fontSize: '18px',
                    text: 'Top',
                    textBaseline: 'top'
                }, {
                    type: 'text',
                    x: 50, y: 40, fontSize: '18px',
                    text: 'Hanging',
                    textBaseline: 'hanging'
                }, {
                    type: 'text',
                    x: 130, y: 40, fontSize: '18px',
                    text: 'Middle',
                    textBaseline: 'middle'
                }, {
                    type: 'text',
                    x: 190, y: 40, fontSize: '18px',
                    text: 'Alphabetic',
                    textBaseline: 'alphabetic'
                }, {
                    type: 'text',
                    x: 290, y: 40, fontSize: '18px',
                    text: 'Ideographic',
                    textBaseline: 'ideographic'
                }, {
                    type: 'text', 
                    x: 400, y: 40, fontSize: '18px',
                    text: 'Bottom',
                    textBaseline: 'bottom'
                }, {
                    type: 'text',
                    x: 10, y: 100, fontSize: '40px',
                    text: 'Bold',
                    textBaseline: 'top',
                    fontWeight: '700'
                }, {
                    type: 'text',
                    x: 130, y: 100, fontSize: '40px',
                    text: 'ABC',
                    fillStyle: '#ccc',
                    fillOpacity: 0,
                    lineWidth: 1,
                    strokeStyle: 'black',
                    textBaseline: 'top',
                    fontWeight: 'bold'
                }, {
                    type: 'text',
                    x: 240, y: 100, fontSize: '40px',
                    text: 'Shadow',
                    shadowColor: '#555',
                    shadowOffsetX: 7,
                    shadowOffsetY: 7,
                    shadowBlur: 20,
                    textBaseline: 'top',
                    fontWeight: 'bold'
                }]
            }],
            fullscreen: true
        });
    }
});
