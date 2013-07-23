StartTest(function(t) {
    var modelName = 'PL.model.Pref';
    t.requireOk(modelName, function() {
        var mod = Ext.create(modelName, {
            name: '奈良県',
            kana: 'なら',
            capital: '奈良',
            capitalkana: 'なら',
            leaf: true
        });
        
        t.is(mod.get('name'), '奈良県', '県名 ok');
        t.is(mod.get('capitalkana'), 'なら', '県庁所在地かな ok');
    });
});
