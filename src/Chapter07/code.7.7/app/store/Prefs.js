Ext.define('PL.store.Prefs', {
    extend: 'Ext.data.TreeStore',
    requires: ['PL.model.Pref'],
    config: {
        model: 'PL.model.Pref',
        autoLoad: true,
        defaultRootProperty: 'data'
    }
});
