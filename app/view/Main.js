Ext.define("discovery.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'discovery.view.Home'],

    scroll: true,

    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'Home',
                iconCls: 'home',
                xtype: 'Home'
            },
            {
                title: 'Manage Channels',
                iconCls: 'action',
                html: [
                "This is cool new discovery application that helps you to manage your channels"
                ].join("")
            }
        ]
    },

    initialize : function() {
          this.callParent(arguments);
          Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
    },

    handleOrientationChange: function(){
        alert(1);
        // Execute the code that needs to fire on Orientation Change.
    }
});