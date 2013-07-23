Ext.setup({
    onReady: function() {


        Ext.define('BaseClass', {
            method: function(v) {
                return v * v;
            }
        });

        Ext.define('MixinClass', {
            getName: function () {
                return 'MixinClass';
            }
        });

        Ext.define('SubClass', {
            extend: 'BaseClass',
            mixins: [
                'MixinClass'
            ]
        });

        var subClass = Ext.create('SubClass');
        console.log(subClass.getName());    // MixinClass

    }
});
