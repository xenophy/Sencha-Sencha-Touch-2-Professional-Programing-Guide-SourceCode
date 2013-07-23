Ext.define('Camera.model.Photo', {
    extend: 'Ext.data.Model',
    config: {
        identifier: {
            type: 'uuid'
        },
        fields: [
            'title',
            'url',
            'location',
            {name: 'date', type: 'date'}
        ],
        proxy: {
            type: 'localstorage',
            id: 'camera-app'
        }
    }
});
