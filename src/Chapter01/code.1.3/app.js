Ext.define('MyApp.Timer', {
    singleton: true,

    config: {
        time: undefined,
        timer: undefined,
        cmp: undefined
    },

    startTimer: function () {
        var me = this,
            incTime = function () {
                var t = me.getTime();
                me.setTime(t ? t + 100 : 100);
            };

        var h = setInterval(incTime, 100);
        me.setTimer(h);
    },

    stopTimer: function () {
        var me = this;

        clearInterval(me.getTimer());
    },

    updateTime: function (value) {
        var me = this,
            s = Ext.Date.format(new Date(value), 'i:s:u');

        me.getCmp().setData({time:s});
    },

    clearTimer: function () {
        var me = this;

        me.stopTimer();
        me.setTime(0);
        Ext.getCmp('timecont').setData({time:'00:00:000'});
    }
    
});

Ext.define('MyApp.MyContainer', {
    extend: 'Ext.Container',
    id: 'maincont',

    config: {
        layout: 'vbox',

        defaults: {
            xtype: 'button',
            margin: '0 10 10 10'
        },
        items: [
            {
                xtype: 'titlebar',
                title: 'Stop Watch',
                margin: 0,
                docked: 'top'
            },
            {
                xtype: 'container',
                id: 'timecont',
                tpl: '{time}',
                flex: 1
            },
            {
                text: 'START',
                ui: 'confirm',
                handler: function () {
                    MyApp.Timer.startTimer();
                }
            },
            {
                text: 'STOP',
                ui: 'decline',
                handler: function () {
                    MyApp.Timer.stopTimer();
                }
            },
            {
                text: 'CLEAR',
                handler: function () {
                    MyApp.Timer.clearTimer();
                }
            }
        ]
    }
});

Ext.setup({
    onReady: function() {
        var cont = Ext.create('MyApp.MyContainer');

        MyApp.Timer.setCmp(Ext.getCmp('timecont'));
        MyApp.Timer.clearTimer();
        Ext.Viewport.add(cont);
    }
});
