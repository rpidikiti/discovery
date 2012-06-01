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

        defaults: {
            flex: 1
        },

        html: "this is atest htls advaskld asd fa;sdlkf jaslkdfj a;kls"
	},


    initialize: function() {
        this.callParent(arguments);
        var local = this;
        Ext.Ajax.request({
            url: 'resources/templates/trending_topcs.html',
            success: function(response, opts) {
                local.bodyElement.dom.innerHTML = response.responseText;
                var $container = $('#container');

                $container.imagesLoaded(function(){
                    $container.masonry({
                        itemSelector: '.box',
                        columnWidth: 100
                    });
                });

                $container.infinitescroll(
                    {
                        navSelector  : '#page-nav',    // selector for the paged navigation
                        nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
                        itemSelector : '.box',     // selector for all items you'll retrieve
                        loading: {
                            finishedMsg: 'No more pages to load.',
                            img: 'http://i.imgur.com/6RMhx.gif'
                        }
                    },

                    // trigger Masonry as a callback
                    function( newElements ) {
                        // hide new items while they are loading
                        var $newElems = $( newElements ).css({ opacity: 0 });
                        // ensure that images load before adding to masonry layout
                        $newElems.imagesLoaded(function(){
                            // show elems now they're ready
                            $newElems.animate({ opacity: 1 });
                            $container.masonry( 'appended', $newElems, true );
                        });
                    }
                );

            }
        });
    } ,

     onItemAdd: function(item) {
        alert(1);
     }
});