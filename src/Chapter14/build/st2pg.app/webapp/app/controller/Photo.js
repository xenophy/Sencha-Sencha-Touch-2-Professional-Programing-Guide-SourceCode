Ext.define('Camera.controller.Photo', {
    extend: 'Camera.controller.Base',
    config: {
        control: {
            photoview: {
                location: 'onLocation',
                close: 'popView'
            }
        }
    },

    onLocation: function(view, loc) {
        var me = this, p;

        p = Ext.widget('locmap', {
            location: loc
        });
        me.getNav().push(p);
    }

});
