Ext.setup({
    onReady: function() {

        Ext.define('ConfigClass', {
            config: {
                name: 'Ingrid Bergman'
            },
            applyName: function (newVal, oldVal) {
                return newVal.search(' ') > 0 ? newVal : oldVal;
            },
            constructor: function() {
                this.initConfig(arguments);
            }
        });

        var configClass = Ext.create('ConfigClass');
        configClass.setName('Grace');
        console.log(configClass.getName());
        configClass.setName('Grace Kelly');
        console.log(configClass.getName());

    }
});
