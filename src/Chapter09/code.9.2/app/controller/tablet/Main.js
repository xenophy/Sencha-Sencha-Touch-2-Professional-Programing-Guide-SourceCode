Ext.define('PL.controller.tablet.Main', {
    extend: 'PL.controller.Main',

    config: {
        control: {
            preflist: {
                back: 'onBack',
                aftershowpref: 'onAfterShowPref'
            }
        }
    },

    onBack: function() {
        this.getPrefCard().hide();
    },

    onAfterShowPref: function (nl, rec) {
        var parent = rec.parentNode;

        nl.goToNode(parent);
        nl.getActiveItem().select(rec);
    }

});
