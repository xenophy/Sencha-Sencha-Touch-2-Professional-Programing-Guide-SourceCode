Ext.define('PL.model.Pref', {
    extend: 'Ext.data.Model',
    config :{
        fields: [
            'name', 'kana', 'capital', 'capitalkana', 'leaf'
        ],
        proxy: {
            type: 'ajax',
            url: 'nestedlist.json'
        }
    }
});
