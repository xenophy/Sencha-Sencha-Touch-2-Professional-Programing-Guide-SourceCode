Ext.define('PL.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        controllers: ['Main']
    },

    isActive: function() {
        return !Ext.os.is.Phone;
    },

    launch: function () {
        var prefCard = Ext.widget('prefcard', {
            flex: 1
        });
        Ext.widget('container', {
            layout: 'hbox',
            fullscreen: true,
            items: [{
                xtype: 'preflist',
                detailContainer: prefCard,
                detailCard: true,
                width: 200
            }, 
                prefCard
            ]
        });
    }
});
