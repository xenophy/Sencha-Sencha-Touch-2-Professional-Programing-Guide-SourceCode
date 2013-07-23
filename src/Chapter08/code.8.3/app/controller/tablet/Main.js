Ext.define('PL.controller.tablet.Main', {
    extend: 'PL.controller.Main',

    config: {
        control: {
            preflist: {
                back: 'onBack'
            }
        }
    },

    onBack: function() {
        this.getPrefCard().hide();
    }
});
