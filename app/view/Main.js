Ext.define("discovery.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'discovery.view.ChannelList'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'Channels',
                iconCls: 'home',
                xtype: 'ChannelList',
                styleHtmlContent: true,
                scrollable: true,
            },
            {
                title: 'Manage Channels',
                iconCls: 'action',

                styleHtmlContent: true,
                scrollable: true,

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