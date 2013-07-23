Ext.define('Camera.store.Photos', {
    extend: 'Ext.data.Store',
    requires: ['Camera.model.Photo'],
    config: {
        model: 'Camera.model.Photo',
        autoLoad: true
    }
});
