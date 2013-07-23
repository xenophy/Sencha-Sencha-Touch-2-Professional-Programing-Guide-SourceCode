Ext.setup({
    onReady: function() {

        Ext.define('ConfigClass', {
            config: {
                name: 'Ingrid Bergman'
            },
            constructor: function() {
                this.initConfig(arguments);
            }
        });

        var configClass = Ext.create('ConfigClass');
        configClass.setName('Grace Kelly');
        console.log(configClass.getName());

    }
});
