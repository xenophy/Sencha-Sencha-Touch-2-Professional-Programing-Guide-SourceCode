Ext.setup({
    onReady: function() {

        Ext.define('CS.model.Sake', {

            extend: 'Ext.data.Model',

            config: {
                fields: [
                    'nvalue',
                    'svalue'
                ]
            }

        });

        Ext.define('CS.store.Sake', {

            extend: 'Ext.data.Store',

            config: {
                model: 'CS.model.Sake',
                data: [
                    {nvalue: 5, svalue: 1.5}, 
                    {nvalue: 5, svalue: 1.4}, 
                    {nvalue: 6, svalue: 1.3}, 
                    {nvalue: 5, svalue: 1.2}, 
                    {nvalue: 5, svalue: 1.1}, 
                    {nvalue: 4, svalue: 1.3}, 
                    {nvalue: 4, svalue: 1.6}, 
                    {nvalue: 4, svalue: 1.4}, 
                    {nvalue: 4, svalue: 0.9}, 
                    {nvalue: 3, svalue: 1.8}, 
                    {nvalue: 3, svalue: 0.8}, 
                    {nvalue: 3, svalue: 1.2}, 
                    {nvalue: 2, svalue: 1.6}, 
                    {nvalue: 1, svalue: 1.8}, 
                    {nvalue: 7, svalue: 1.6}, 
                    {nvalue: 7, svalue: 1.2}, 
                    {nvalue: 10, svalue: 1.6}, 
                    {nvalue: -1, svalue: 1.9}
                ]
            }
        });

        Ext.create('CS.store.Sake', {
            storeId: 'Sake'
        });


        Ext.define('ScatterChart', {

            extend: 'Ext.chart.CartesianChart',
            xtype: 'scatterchart',
            config: {
                store: 'Sake',
                axes: [{
                    type: 'numeric',
                    position: 'left',
                    fields: ['svalue'],
                    minimum: 0.6,
                    maximum: 2.2,
                    grid: true,
                    title: {
                        text: '酸度',
                        fontSize: 15
                    }
                }, {
                    type: 'numeric',
                    position: 'bottom',
                    fields: ['nvalue'],
                    minimum: -5,
                    maximum: 11,
                    grid: true,
                    title: {
                        text: '日本酒度',
                        fontSize: 15
                    }
                }],
                series: [{
                    type: 'scatter',
                    xField: 'nvalue',
                    yField: 'svalue',
                    marker: {
                        type: 'circle',
                        fillStyle: 'blue',
                        radius: 10,
                        lineWidth: 0
                    }
                }]
            }
        });

        Ext.Viewport.add({
            xtype: 'scatterchart',
            fullscreen: true
        });
    }
});
