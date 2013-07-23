Ext.setup({
    onReady: function() {

        Ext.define('CS.model.Evaluation', {

            extend: 'Ext.data.Model',

            config: {
                fields: [
                    'genre',
                    'value'
                ]
            }

        });

        Ext.define('CS.store.Evaluations', {

            extend: 'Ext.data.Store',

            config: {
                model: 'CS.model.Evaluation',

                data: [
                    {genre: 'design'      , value: 4.2},
                    {genre: 'battery'     , value: 3.8},
                    {genre: 'sound'       , value: 4.0},
                    {genre: 'display'     , value: 5.0},
                    {genre: 'response'    , value: 5.0},
                    {genre: 'inputmethod' , value: 3.5},
                    {genre: 'operability' , value: 4.6},
                    {genre: 'portability' , value: 4.4}
                ]
            }

        });
        
        Ext.create('CS.store.Evaluations', {
            storeId: 'Evaluations'
        });

        Ext.define('RadarChart', {

            extend: 'Ext.chart.PolarChart',
            xtype: 'radarchart',
            config: {
                store: 'Evaluations',
                radius: 100,
                innerPadding: 20,
                axes: [{
                    type: 'numeric',
                    position: 'radial',
                    grid: true,
                    label: {
                        display: true
                    }
                }, {
                    type: 'category',
                    position: 'angular',
                    fields: 'genre',
                    grid: true
                }],
                series: [{
                    type: 'radar',
                    xField: 'genre',
                    yField: 'value',
                    style: {
                        strokeStyle: 'black',
                        fillStyle: 'red',
                        fillOpacity: 0.1
                    }
                }]
            }
        });

        Ext.Viewport.add({
            xtype: 'radarchart',
            fullscreen: true
        });
    }
});
