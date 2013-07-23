Ext.setup({
    onReady: function() {

        Ext.define('User', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    'name',
                    'email',
                    'group_id'
                ],
                proxy: {
                    type: 'ajax',
                    //url: 'users.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'users'
                    }
                },
                hasMany: 'Task',
                belongsTo: 'Group'
            }
        });

        Ext.define('Group', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    'groupName'
                ],
                proxy: {
                    type: 'ajax',
                    //url: 'groups.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'users'
                    }
                },
                hasMany: 'User'
            }
        });

        Ext.define('Task', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    'taskName'
                ],
                belongsTo: 'User'
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
