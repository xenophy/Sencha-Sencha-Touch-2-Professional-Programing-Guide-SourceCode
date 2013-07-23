Ext.setup({
    onReady: function() {
        
        var store = Ext.create("Ext.data.Store", {
            fields: ['month', 'maxTemp', 'aveTemp', 'minTemp', 'precipitation'],
            data: [
                { month: '1月',  maxTemp: -0.6,  aveTemp: -3.6,  minTemp:-7.0, precipitation: 113.6},
                { month: '2月',  maxTemp: 0.1,   aveTemp: -3.1,  minTemp:-6.6, precipitation: 94.0},
                { month: '3月',  maxTemp: 4.0,   aveTemp: 0.6,   minTemp:-2.9, precipitation: 77.8},
                { month: '4月',  maxTemp: 11.5,  aveTemp: 7.1,   minTemp:3.2 , precipitation: 56.8},
                { month: '5月',  maxTemp: 17.3,  aveTemp: 12.4,  minTemp:8.3 , precipitation: 53.1},
                { month: '6月',  maxTemp: 21.5,  aveTemp: 16.7,  minTemp:12.9, precipitation: 46.8},
                { month: '7月',  maxTemp: 24.9,  aveTemp: 20.5,  minTemp:17.3, precipitation: 81.0},
                { month: '8月',  maxTemp: 26.4,  aveTemp: 22.3,  minTemp:19.1, precipitation: 123.8},
                { month: '9月',  maxTemp: 22.4,  aveTemp: 18.1,  minTemp:14.2, precipitation: 135.2},
                { month: '10月', maxTemp: 16.2,  aveTemp: 11.8,  minTemp:7.5 , precipitation: 108.7},
                { month: '11月', maxTemp: 8.5,   aveTemp: 4.9,   minTemp:1.3 , precipitation: 104.1},
                { month: '12月', maxTemp: 2.1,   aveTemp: -0.9,  minTemp:-4.1, precipitation: 111.7}
            ]
        });

        var panel = Ext.widget('panel', {
            layout: 'fit',
            style: 'background: white',
            items: [{
                xtype: 'chart',
                store: store,
                axes:[{
                    title: '気温',
                    type: 'numeric',
                    position: 'left',
                    fields: ['aveTemp'],
                    maximum: 30,
                    minimum: -10
                }, {
                    type: 'numeric',
                    position: 'right',
                    fields: ['precipitation'],
                    maximum: 150,
                    minimum: 0
                }, {
                    type: 'category',
                    position: 'bottom',
                    fields: ['month']
                }],
                legend: {
                    position:'top'
                },
                series: [
                    {
                        type: 'line',
                        xField: 'month',
                        yField: ['aveTemp'],
                        title: '平均気温',
                        style: {
                            stroke: '#115fa6',
                            lineWidth: 1
                        },
                        highlightCfg: {
                            scale: 1
                        },
                        marker: {
                            type: 'circle',
                            stroke: '#0d1f96',
                            fill: '#115fa6',
                            radius: 4
                        }
                    },
                    {
                        type: 'bar',
                        xField: 'month',
                        yField: ['precipitation'],
                        title: ['降水量'],
                        style: {
                            maxBarWidth: 15,
                            lineWidth: 1.5,
                            fill: "#ccddee",
                            stroke: 'black'
                        }
                    }
                ]
            }],
            fullscreen: true
        });

    }
});
