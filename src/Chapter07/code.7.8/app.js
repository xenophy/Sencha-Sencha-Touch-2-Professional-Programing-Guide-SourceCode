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

        Ext.define('OvrClass', {
            override: 'BaseClass',
            method: function(v) {
                return Math.pow(v, 3);
            }
        });

        var baseClass = Ext.create('BaseClass');
        var subClass = Ext.create('SubClass');
        console.log(baseClass.method(10));  // 1000
        console.log(subClass.method(10));   // 1001
    }
});
