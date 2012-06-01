Ext.define('discovery.view.TrendingTopics', {

	extend: 'Ext.Panel',

	xtype: 'TrendingTopics',

    scroll: true,

    scrollable: {
        direction: 'vertical'
    },

    currentObj: this,

	requires: [
		'Ext.form.Panel',
		'Ext.plugin.ListPaging',
		'Ext.TitleBar'
	],

	config: {

	    layout: 'vbox',

        defaults: {
            flex: 1
        },

        items: [
        ]
	},


    initialize: function() {
        this.callParent(arguments);
    }
});