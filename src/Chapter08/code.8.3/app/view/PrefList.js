Ext.define('PL.view.PrefList', {
    extend: 'Ext.dataview.NestedList',
    requires: ['PL.view.PrefCard'],
    alias: 'widget.preflist',
    config: {
        store: 'Prefs',
        listConfig: {
            variableHeights: true
        },
        displayField: 'name'
    }
});
