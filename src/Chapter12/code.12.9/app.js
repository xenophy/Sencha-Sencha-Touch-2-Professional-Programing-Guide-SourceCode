Ext.setup({
    onReady: function() {

        Ext.define('CS.model.Sale', {

            extend: 'Ext.data.Model',

            config: {
                fields: [
                    'month',
                    'sales',
                    'comment'
                ]
            }

        });

        Ext.define('CS.store.Sales', {

            extend: 'Ext.data.Store',

            config: {
                model: 'CS.model.Sale',

                data: [
                    {month: '1月',  sales: 3000, comment: 'かなり厳しい状況'},
                    {month: '2月',  sales: 4000, comment: 'やや回復'},
                    {month: '3月',  sales: 3000, comment: '再び厳しい状況'},
                    {month: '4月',  sales: 4000, comment: 'やや回復'},
                    {month: '5月',  sales: 5000, comment: '順調に売上増'},
                    {month: '6月',  sales: 6000, comment: '最高額を更新'},
                    {month: '7月',  sales: 3000, comment: '6月特需の余波'},
                    {month: '8月',  sales: 5000, comment: '通常レベルに回復'},
                    {month: '9月',  sales: 4000, comment: 'やや下げるも通常'},
                    {month: '10月', sales: 5000, comment: '通常レベル'},
                    {month: '11月', sales: 5000, comment: '通常レベル'},
                    {month: '12月', sales: 4000, comment: '問題なし'}
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
                interactions: [{
                    type: 'panzoom',
                    axes: {
                        left: {
                            allowPan: false,
                            allowZoom: false
                        },
                        bottom: {
                            allowPan: true,
                            allowZoom: true
                        }
                    }
                }, {
                    type: 'iteminfo',
                    gesture: 'itemtaphold',
                    listeners: {
                        show: function(me, item, panel) {
                            panel.down('toolbar').setTitle('コメント');
                            panel.setHtml(item.record.get('comment'));
                        }
                    }
                }, 
                    'itemhighlight'
                ],
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
                    grid    : {
                        stroke: '#ccc'
                    }
                }],
                series: [{
                    type: 'bar',
                    xField: 'month',
                    yField: 'sales',
                    subStyle: {
                        fill: 'green'
                    },
                    highlightCfg: {
                        strokeStyle: 'orange',
                        shadowColor: 'orange',
                        fill: '#0a0',
                        shadowBlur: 16
                    }
                }]
            }
        });

        Ext.Viewport.add({
            xtype: 'barchart',
            fullscreen: true
        });
    }
});
