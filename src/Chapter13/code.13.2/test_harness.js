var Harness = Siesta.Harness.Browser.SenchaTouch;

Harness.configure({
    title     : 'Sencha Touch 2 PrefList App Test',
    loaderPath: {PL: 'app'},
    preload : [
        "../../touch/resources/css/sencha-touch.css",
        "../../touch/sencha-touch-all-debug.js"
    ]
});

Harness.start(
    {
        group: 'Sanity',
        items: [
            'tests/010_sanity.t.js'
        ]
    },
    {
        group: 'Models',
        items: [
            'tests/110_pref.t.js'
        ]
    },
    {
        group: 'Stores',
        items: [
            'tests/210_prefs.t.js'
        ]
    },
    {
        group: 'Views',
        items: [
            'tests/310_prefList.t.js',
            {
                url: 'tests/320_prefCard.t.js',
                overrideSetTimeout : false,
                alsoPreload : [
                    "http://maps.google.com/maps/api/js?sensor=true",
                    "resources/css/nestedlist.css"
                ]
            }
        ]
    },
    {
        group: 'App',
        items : [
            {
                hostPageUrl: 'index.html',
                overrideSetTimeout : false,
                url: 'tests/410_app.t.js',
                preload: []
            }
        ]
    }
);
