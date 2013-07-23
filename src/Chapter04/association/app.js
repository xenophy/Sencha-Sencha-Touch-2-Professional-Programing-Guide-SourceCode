Ext.setup({
    onReady: function() {
        
        Ext.define('Task', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    'id', 'title', 'user_id' , 'deadline'
                ],

                proxy: {
                    type: 'ajax',
                    url: 'tasks.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'tasks'
                    }
                },
                belongsTo: 'User'
            }
        });

        Ext.define('Group', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    'id', 'group_name'
                ],

                proxy: {
                    type: 'ajax',
                    url: 'groups.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'groups'
                    }
                },
                hasMany: 'User'
            }

        });

        Ext.define('User', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    'id', 'name', 'email', 'group_id'
                ],

                proxy: {
                    type: 'ajax',
                    url: 'users.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'users'
                    }
                },

                associations: [{
                    type: 'belongsTo',
                    model: 'Group'
                }, {
                    type: 'hasMany',
                    model: 'Task',
                    name: 'tasks'
                }]
            }

        });

        Ext.create('Ext.data.Store', {
            model: 'User',
            storeId: 'Users'
        });

        // ID が1のGroupをロードし、関連するuserとtaskをロードする
        Group.load(1, {
            success: function(group) {
                console.log("Group: " + group.get('group_name'));

                // users()メソッドを使って関連するユーザーをロード
                group.users().each(function(user) {
                    console.log("User name: " + user.get('name'));

                    // userのtasks()メソッドを使って関連するタスクをロード
                    user.tasks().each(function(task) {
                        console.log(task.get('title'));
                    });
                });
            }
        });

        var users = Ext.getStore('Users');

        users.load({
            callback: function() {
                var user = users.getById('2');

                user.tasks().add({
                    title: 'Sencha Touch 2実践開発ガイド購入',
                    deadline: '2013-05-05'
                });
                //user.tasks().sync();

                // groupの参照をUserのbelongsToアソシエーションから取得する
                user.getGroup(function(user) {
                    console.log('userから取得したgroup : ' + user.get('group_name'));
                });

                // userのgroupを変更してみる
                user.setGroup(1, {
                    callback: function(product, operation) {
                        if (operation.wasSuccessful()) {
                            console.log('userのgroupが更新されました');
                        } else {
                            console.log('userのgroupは更新されませんでした');
                        }
                    }
                });
            }
        });


    }
});
