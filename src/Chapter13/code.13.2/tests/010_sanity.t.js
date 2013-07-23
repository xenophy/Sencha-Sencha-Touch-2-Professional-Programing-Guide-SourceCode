StartTest(function(t) {
    t.diag("クラスをロードし確かにロードできたか調べる");
    
    t.ok(Ext, 'Sencha Touch is here');
    t.requireOk('PL.controller.Main');
});
