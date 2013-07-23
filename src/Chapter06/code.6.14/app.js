Ext.setup({
    onReady: function() {
        
    var tpl = Ext.create('Ext.XTemplate', 
        '<p>動作環境</p>',
        '<ul>',
            '<tpl for="oslist">',
                '<tpl for="version">',
                    '<li>{parent.name} : {name}</li>',
                '</tpl>',
            '</tpl>',
        '</ul>'
    );

    tpl.overwrite(document.body, {
        oslist: [{
            name: 'Mac OS X',
            version: [
                { name: 'Leopard' },
                { name: 'Snow Leopard' },
                { name: 'Lion' },
                { name: 'Mountain Lion' }
            ]
        }, {
            name: 'Windows',
            version: [
                { name: 'Xp' },
                { name: '7' },
                { name: '8' }
            ]
        }]
    });

    }
});
