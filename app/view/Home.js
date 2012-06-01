Ext.define('discovery.view.Home', {

	extend: 'Ext.Container',

	xtype: 'Home',

    currentObj: this,

    scroll: true,

	requires: [
		'Ext.form.Panel',
		'Ext.plugin.ListPaging',
		'Ext.TitleBar',
		'discovery.view.ChannelList',
		'discovery.view.TrendingTopics'
	],

	config: {

	    layout: 'vbox',

        defaults: {
            flex: 1
        },

        items: [
            {
                xtype: 'ChannelList',
                scrollable: true,
                flex:8
            },
            {
                xtype: 'TrendingTopics',
                scrollable: true,
                flex:11
            }
        ]
	},


    initialize: function() {
        this.callParent(arguments);
    }
});