Ext.define('discovery.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',

        controllers: [

        ],

        views: [
        ]
    },

    launch: function() {

    },

    isActive: function() {
        return !Ext.os.is.Phone;
    }
});