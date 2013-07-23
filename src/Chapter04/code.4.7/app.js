Ext.setup({
    onReady: function() {

        Ext.define('User', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    'name', 'email'
                ],

                proxy: {
                    type: 'ajax',
                    url: 'users.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'users'
                    }
                }
            }

        });

        // サーバーからロード
        User.load(1, {
            success: function(rec) {
                console.log(rec.get('name'));
            }
        });

        // モデルインスタンスの生成
        var bogie = Ext.create('User', {
            name: 'Humphrey Bogart',
            email : 'bogie@casablanca.com'
        });

        console.log(bogie.get('name'));
    }
});
