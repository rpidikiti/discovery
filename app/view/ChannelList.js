Ext.define('discovery.view.ChannelList', {

	extend: 'Ext.Panel',

	xtype: 'ChannelList',

    scroll: false,
    scrollable: {
        direction: 'horizontal'
    },

    currentObj: this,

	requires: [
		'Ext.form.Panel',
		'Ext.plugin.ListPaging',
		'Ext.TitleBar'
	],

	config: {

	    layout: 'hbox',

        defaults: {
            flex: 1
        },

        items: [
            {
                xtype: 'panel',
                html: '<div class="magazine" style="width:300px;height:300px"><div style="background-image:url(resources/images/card_background.jpg);">Page 1</div><div style="background-image:url(resources/images/card_background.jpg);">Page 2</div><div style="background-image:url(resources/images/card_background.jpg);">Page 3</div></div>',
                width: 350
            },
            {
                xtype: 'panel',
                html: '<div class="magazine" style="width:300px;height:300px"><div style="background-image:url(resources/images/card_background.jpg);">Page 1</div><div style="background-image:url(resources/images/card_background.jpg);">Page 2</div><div style="background-image:url(resources/images/card_background.jpg);">Page 3</div></div>',
                width: 350
            },
            {
                xtype: 'panel',
                html: '<div class="magazine" style="width:300px;height:300px"><div style="background-image:url(resources/images/card_background.jpg);">Page 1</div><div style="background-image:url(resources/images/card_background.jpg);">Page 2</div><div style="background-image:url(resources/images/card_background.jpg);">Page 3</div></div>',
                width: 350
            },
            {
                xtype: 'panel',
                html: '<div class="magazine" style="width:300px;height:300px"><div style="background-image:url(resources/images/card_background.jpg);">Page 1</div><div style="background-image:url(resources/images/card_background.jpg);">Page 2</div><div style="background-image:url(resources/images/card_background.jpg);">Page 3</div></div>',
                width: 350
            },
            {
                xtype: 'panel',
                html: '<div class="magazine" style="width:300px;height:300px"><div style="background-image:url(resources/images/card_background.jpg);">Page 1</div><div style="background-image:url(resources/images/card_background.jpg);">Page 2</div><div style="background-image:url(resources/images/card_background.jpg);">Page 3</div></div>',
                width: 350
            },
            {
                xtype: 'panel',
                html: '<div class="magazine" style="width:300px;height:300px"><div style="background-image:url(resources/images/card_background.jpg);">Page 1</div><div style="background-image:url(resources/images/card_background.jpg);">Page 2</div><div style="background-image:url(resources/images/card_background.jpg);">Page 3</div></div>',
                width: 350
            },
            {
                xtype: 'panel',
                html: '<div class="magazine" style="width:300px;height:300px"><div style="background-image:url(resources/images/card_background.jpg);">Page 1</div><div style="background-image:url(resources/images/card_background.jpg);">Page 2</div><div style="background-image:url(resources/images/card_background.jpg);">Page 3</div></div>',
                width: 350
            }

        ]
	},


    initialize: function() {
        this.callParent(arguments);
    },

	loadURL: function(urlLocation) {
        Ext.Ajax.request({
            url: urlLocation,
            success: function(response, opts) {
                return response.responseText;
            }
        })
	},

    onTap: function() {
        alert(1);
    },

    onItemAdd: function(item) {
        this.callParent(arguments);
//        $('#magazine').data({});
        if ($(item.element.dom).find('.magazine').length > 0) {
            $(item.element.dom).find('.magazine').turn({
                                display: 'single',
                                acceleration: true,
                                gradients: !$.isTouch,
                                pages:3,
                                elevation:50,
                                when: {
                                    turned: function(e, page) {
                                        /*console.log('Current view: ', $(this).turn('view'));*/
                                    }
                                }
                            });


            $(window).bind('keydown', function(e){

                if (e.keyCode==37)
                    $('#magazine').turn('previous');
                else if (e.keyCode==39)
                    $('#magazine').turn('next');

            });
        }
    }



});