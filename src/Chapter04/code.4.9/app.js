Ext.setup({
    onReady: function() {

        Ext.define('User', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    'name', 'email',
                    {name: 'age', type: 'int', defaultValue: 0},
                    {name: 'gender', type: 'string', defaultValue: 'Unknown'},
                    {
                        name: 'firstName',
                        convert: function(value, record) {
                            var fullName  = record.get('name'),
                                splits    = fullName.split(" "),
                                firstName = splits[0];
                            return firstName;
                        }
                    }
                ]
            }
        });

        Ext.create('Ext.data.Store', {
            model: 'User',
            storeId: 'MyStore',
            autoLoad: true
        });

        var myStore = Ext.getStore('MyStore');

        // モデルのインスタンスを追加
        var rec = Ext.create('User', {
            name: 'Humphrey Bogart'
        });
        myStore.add(rec);
        // モデルのコンフィグで追加
        myStore.add({
            name: 'Gregory Peck'
        });
        // 取り出し
        myStore.each(function(rec) {
            console.log(rec.get('firstName'));
        });
        
    }
});
