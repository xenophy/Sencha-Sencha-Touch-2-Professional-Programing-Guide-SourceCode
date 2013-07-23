StartTest(function(t) {
    t.waitForSelector(".x-list-item", function () {
        var tapFirst = {
            action : 'tap',
            target : '.x-list:not(.x-item-hidden) .x-list-item-first'
        };
        t.chain(
            tapFirst,
            { action : 'wait', delay : 500 },
            tapFirst,
            { action : 'wait', delay : 2000 },
            { action : 'tap', target : '>>[ui=back]' },
            { action : 'wait', delay : 500 },
            { action : 'tap', target : '>>[ui=back]' },
            { action : 'wait', delay : 2000 }
        );
    });
});
