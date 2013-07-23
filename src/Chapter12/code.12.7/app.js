Ext.setup({
    onReady: function() {

        Ext.define('GaugeChart', {

            extend: 'Ext.chart.SpaceFillingChart',
            xtype: 'gaugechart',
            config: {
                series: [{
                    type: 'gauge',
                    minimum: 0,
                    maximum: 100,
                    value: 60,
                    donut: 30,
                    needleLength: 100,
                    subStyle: {
                        fillStyle: ['blue', 'gray']
                    }
                }]
            }
        });

        Ext.Viewport.add({
            xtype: 'gaugechart',
            fullscreen: true
        });
    }
});
