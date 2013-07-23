Ext.setup({
    onReady: function() {


        Ext.define('BaseClass', {
            method: function(v) {
                return v * v;
            }
        });

        Ext.define('MixinFoo', {
            getName: function () {
                return 'MixinFoo';
            }
        });

        Ext.define('MixinBar', {
            getName: function () {
                return 'MixinBar';
            }
        });

        Ext.define('SubClass', {
            extend: 'BaseClass',
            mixins: [
                'MixinFoo', 'MixinBar'
            ]
            /*mixins: {
                foo: 'MixinFoo',
                bar: 'MixinBar'
            }*/
        });

        var baseClass = Ext.create('BaseClass');
        var subClass = Ext.create('SubClass');
        console.log(subClass.getName());                 // MixinFoo
        console.log(subClass.mixins.MixinBar.getName()); // MixinBar
        //console.log(subClass.mixins.bar.getName()); // MixinBar

    }
});
