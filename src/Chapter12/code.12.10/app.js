Ext.setup({
    onReady: function() {

        Ext.define('CS.model.Share', {

            extend: 'Ext.data.Model',

            config: {
                fields: [
                    'name',
                    'share'
                ]
            }

        });

        Ext.define('CS.store.Shares', {

            extend: 'Ext.data.Store',

            config: {
                model: 'CS.model.Share',

                data: [
                    {name:"IE 9.0", share:35.8},
                    {name:"IE 8.0", share:16.87},
                    {name:"Chrome 21.0", share:16.31},
                    {name:"Firefox 14.0", share:12.25},
                    {name:"Safari 5.1", share:2.82},
                    {name:"Chrome 20.0", share:1.7},
                    {name:"Safari 6.0", share:1.37},
                    {name:"Safari iPad", share:1.37},
                    {name:"IE 7.0", share:1.32},
                    {name:"Safari 5.0", share:1.09},
                    {name:"Opera 12.0", share:1.07},
                    {name:"Others", share:9.1}
                ]
            }

        });


        Ext.create('CS.store.Shares', {
            storeId: 'Shares'
        });

        Ext.define('PieChart', {

            extend: 'Ext.chart.PolarChart',
            xtype: 'piechart',
            config: {
                innerPadding: 80,
                interactions: ['rotate'],
                store: 'Shares',
                colors: [
                    'blue','green','red','orange','aqua','greenyellow'
                ],

                series: [{
                    donut: 20,
                    type: 'pie',
                    labelField: 'name',
                    xField: 'share',
                    rotation: Math.PI / 2 * 3
                }],
                legend: {
                    docked: 'right'
                }

            }
        });


        Ext.Viewport.add({
            xtype: 'piechart',
            fullscreen: true
        });
    }
});
