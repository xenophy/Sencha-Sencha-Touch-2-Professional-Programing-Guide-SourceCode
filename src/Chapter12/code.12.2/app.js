Ext.setup({
    onReady: function() {

        Ext.define('CS.model.Sale', {

            extend: 'Ext.data.Model',

            config: {
                fields: [
                    'month',
                    'tokyo',
                    'sapporo',
                    'osaka',
                    'nagoya',
                    'fukuoka'
                ]
            }

        });

        Ext.define('CS.store.Sales', {

            extend: 'Ext.data.Store',

            config: {
                model: 'CS.model.Sale',

                data: [
                    {month: '1月',  tokyo: 3000, sapporo: 2000, osaka: 3500, nagoya: 1200, fukuoka: 2100},
                    {month: '2月',  tokyo: 4000, sapporo: 2200, osaka: 3200, nagoya: 1000, fukuoka: 2000},
                    {month: '3月',  tokyo: 3000, sapporo: 2000, osaka: 2000, nagoya: 1000, fukuoka: 1900},
                    {month: '4月',  tokyo: 4000, sapporo: 3000, osaka: 4000, nagoya: 1100, fukuoka: 2200},
                    {month: '5月',  tokyo: 5000, sapporo: 3000, osaka: 4200, nagoya: 1000, fukuoka: 2000},
                    {month: '6月',  tokyo: 6000, sapporo: 5000, osaka: 3200, nagoya: 1100, fukuoka: 1800},
                    {month: '7月',  tokyo: 3000, sapporo: 2000, osaka: 3600, nagoya: 1200, fukuoka: 1900},
                    {month: '8月',  tokyo: 5000, sapporo: 2000, osaka: 4000, nagoya: 1300, fukuoka: 2200},
                    {month: '9月',  tokyo: 4000, sapporo: 2000, osaka: 3000, nagoya: 1200, fukuoka: 2000},
                    {month: '10月', tokyo: 5000, sapporo: 3000, osaka: 2000, nagoya: 1100, fukuoka: 1800},
                    {month: '11月', tokyo: 5000, sapporo: 2500, osaka: 3000, nagoya: 1000, fukuoka: 2200},
                    {month: '12月', tokyo: 4000, sapporo: 2000, osaka: 3000, nagoya: 1300, fukuoka: 2000}
                ]
            }

        });

        Ext.create('CS.store.Sales', {
            storeId: 'Sales'
        });

        Ext.define('BarChart', {

            extend: 'Ext.chart.Chart',
            xtype: 'barchart',
            config: {
                store: 'Sales',
                axes: [{
                    type    : 'category',
                    position: 'bottom',
                    fields  : ['month'],
                    title   : '月'
                }, {
                    type: 'numeric',
                    position: 'left',
                    title: '金額',
                    minimum: 1000,
                    maximum: 8000,
                    majorTickSteps: 7,
                    minorTickSteps: 5,
                    grid    : {
                        stroke: '#ccc'
                    }
                }],
                series: [{
                    type: 'bar',
                    stacked: false,
                    title: ['東京本社', '札幌支社'],
                    xField: 'month',
                    yField: ['tokyo', 'sapporo'],
                    subStyle: {
                        fill: ['green', 'blue']
                    }
                }],
                legend: {
                    docked: 'top'
                }
            }
        });

        Ext.Viewport.add({
            xtype: 'barchart',
            fullscreen: true
        });
    }
});
