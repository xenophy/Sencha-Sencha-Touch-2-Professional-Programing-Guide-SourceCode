Ext.setup({
    onReady: function() {
        var tpl, func = 1;

        switch(func) {
            case 1:

                // code.6.13
                tpl = Ext.create('Ext.XTemplate', 
                    '<p>動作環境</p>',
                    '<ul>',
                        '<tpl for="oslist">',
                            '<li>{#}. {name}</li>',
                        '</tpl>',
                    '</ul>'
                );
                tpl.overwrite(document.body, {
                    oslist: [
                        { name: 'Mac OS X' },
                        { name: 'Windows' },
                        { name: 'Linux' }
                    ]
                });
                break;
                
            case 2:
                // フラットな配列

                tpl = Ext.create('Ext.XTemplate', 
                    '<tpl for="computers">',
                    '<div>{#}. {.}</div>',
                    '</tpl>'
                );
                tpl.overwrite(document.body, {
                    computers : ['Mac OS X', 'Windows', 'Linux']
                });
                break;

            case 3:

                // ルートが配列

                tpl = Ext.create('Ext.XTemplate', 
                    '<p>動作環境</p>',
                    '<ul>',
                        '<tpl for=".">',
                            '<li>{#}. {name}</li>',
                        '</tpl>',
                    '</ul>'
                );
                tpl.overwrite(document.body, [
                    { name: 'Mac OS X' },
                    { name: 'Windows' },
                    { name: 'Linux' }
                ]);

        }
    }
});
