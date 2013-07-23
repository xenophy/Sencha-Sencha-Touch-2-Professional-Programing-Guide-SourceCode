Ext.define('Camera.controller.List', {
    extend: 'Camera.controller.Base',
    requires: [
        'Ext.device.Camera',
        'Ext.device.Geolocation'
    ],
    config: {
        control: {
            photolist: {
                capture: 'onCapture',
                showitem: 'onShowItem'
            }
        }
    },

    onCapture: function() {
        var me = this;

        Ext.device.Camera.capture({
            source: 'camera',
            destination: 'file',
            success: function(url) {
                var d = new Date(), loc, photo;

                photo = {
                    title: Ext.Date.format(d, 'Y-m-d H:i:s'),
                    url: url,
                    location: undefined,
                    date: d
                };
                Ext.device.Geolocation.getCurrentPosition({
                    success: function(position) {
                        photo.location = position;
                        me.showPreview(photo);
                    },
                    failure: function() {
                        me.showPreview(photo);
                    }
                });
            }
        });
    },

    showPreview: function(photo) {
        var me = this,
            p = Ext.widget('preview', {
                photo: photo
            });

        me.getNav().push(p);
    },

    onShowItem: function(list, rec) {
        var me = this,
            p;

        p = Ext.widget('photoview', {
            record: rec
        });
        me.getNav().push(p);
    }

});
