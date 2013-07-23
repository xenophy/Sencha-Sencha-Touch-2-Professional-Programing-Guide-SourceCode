Ext.setup({
    onReady: function() {

        Ext.define('BaseClass', {
            method: function(v) {
                return v * v;
            }
        });

        Ext.define('SubClass', {
            extend: 'BaseClass',
            method: function(v) {
                return this.callParent(arguments) + 1;
            }
        });

        var baseClass = Ext.create('BaseClass');
        var subClass = Ext.create('SubClass');
        console.log(baseClass.method(10));  // 100
        console.log(subClass.method(10));   // 101
    }
});
