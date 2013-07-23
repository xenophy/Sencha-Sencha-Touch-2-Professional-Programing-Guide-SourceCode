Ext.define('Camera.controller.Preview', {
    extend: 'Camera.controller.Base',
    config: {
        control: {
            preview: {
                save: 'onSave',
                cancel: 'popView'
            }
        }
    },

    onSave: function(view, title) {
        var me = this,
            photo = view.getPhoto(),
            store = Ext.getStore('Photos'),
            rec;

        if( photo ){
            if( title ) {
                photo.title = title;
            }
            rec = Ext.create('Camera.model.Photo', photo);
            store.add(rec);
            store.sync();
        }
        me.popView();
    }

});
