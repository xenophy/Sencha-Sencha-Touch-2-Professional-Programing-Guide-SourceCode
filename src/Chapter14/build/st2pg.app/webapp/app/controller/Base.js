Ext.define('Camera.controller.Base', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            nav: 'navigationview'
        }
    },

    popView: function() {
        var me = this;

        me.getNav().pop();
    }

});
