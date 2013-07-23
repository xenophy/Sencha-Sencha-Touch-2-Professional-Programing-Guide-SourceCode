Ext.define('PL.profile.Phone', {
    extend: 'Ext.app.Profile',

    isActive: function() {
        return Ext.os.is.Phone;
    },

    launch: function() {
        Ext.widget('preflist', {
            fullscreen: true,
            store: 'Prefs',
            detailCard: {
                xtype: 'prefcard'
            }
        });
    }
});
