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
        var user = Ext.create('User', {name: 'Hisashi Nakamura'});
        console.dir(user.data);
    }
});
