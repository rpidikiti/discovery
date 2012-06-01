Ext.define('discovery.view.ChannelList', {

	extend: 'Ext.Container',

	xtype: 'ChannelList',

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
        ]
	},


    initialize: function() {
        this.callParent(arguments);
        this.applyItems(this.getChannelList());
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

    getChannelList: function() {
        var a =[
                 {
                    xtype: 'panel',
                    html: "test",
                    width: 370,
                    height:370,
                    channelName:"Finance & Markets"
                },
                 {
                    xtype: 'panel',
                    html: "test",
                    width: 370,
                    height:370,
                    channelName:"Presidential Election"
                },
                 {
                    xtype: 'panel',
                    html: "test",
                    width: 370,
                    height:370,
                    channelName:"Technology"
                },
                 {
                    xtype: 'panel',
                    html: "test",
                    width: 370,
                    height:370,
                    channelName:"Entertainment"
                },
                 {
                    xtype: 'panel',
                    html: "test",
                    width: 370,
                    height:370,
                    channelName:"Sports"
                },
                 {
                    xtype: 'panel',
                    html: "test",
                    width: 370,
                    height:370,
                    channelName:"Work Related"
                }
               ];
        return a;
    },

    onItemAdd: function(item) {
        this.callParent(arguments);
        var localObj = this;
        Ext.Ajax.request({
            url: 'resources/templates/channel_card.html',
            success: function(response, opts) {
                //var data = [{"name":"Finance & Markets"}, {"name":"Presidential Elections"}, {"name":"Technology"}, {"name":"Entertainment"}];
                var data = localObj.getChannelSummary(item.channelName);
                var tpl = new Ext.XTemplate(response.responseText);
                tpl.overwrite(item.element.dom, data);
                //item.element.dom.innerHTML = response.responseText;
                $(item.element.dom).find('#da-slider').cslider({});
            }
        })


//
//
////        debugger;
//        $(item.element.dom).find('a').bind("click",function(){
//            var $this = $(this);
//            $("#flipbox").flip({
//                direction: $this.attr("rel"),
//                color: $this.attr("rev"),
//                content: $this.attr("title"),//(new Date()).getTime(),
//                onBefore: function(){$(".revert").show()}
//            })
//            return false;
//        });
//
//        $(item.element.dom).find('a').bind("touch",function(){
//            var $this = $(this);
//            $("#flipbox").flip({
//                direction: $this.attr("rel"),
//                color: $this.attr("rev"),
//                content: $this.attr("title"),//(new Date()).getTime(),
//                onBefore: function(){$(".revert").show()}
//            })
//            return false;
//        });


//        top
//        $(item.element.dom).find('.magazine').flip({
//            direction:'tb'
//        })
//        $('#magazine').data({});
//        if ($(item.element.dom).find('.magazine').length > 0) {
//            $(item.element.dom).find('.magazine').turn({
//                                display: 'single',
//                                acceleration: true,
//                                gradients: !$.isTouch,
//                                pages:3,
//                                elevation:50,
//                                when: {
//                                    turned: function(e, page) {
//                                        /*console.log('Current view: ', $(this).turn('view'));*/
//                                    }
//                                }
//                            });
//
//
//            $(window).bind('keydown', function(e){
//
//                if (e.keyCode==37)
//                    $('#magazine').turn('previous');
//                else if (e.keyCode==39)
//                    $('#magazine').turn('next');
//
//            });
//        }
    },


    getChannelSummary: function(channelName) {
        var cs = {};
        cs["Finance & Markets"] = { name: "Finance & Markets",
                                    items:[
                                            {
                                                channelName:"Finance & Markets",
                                                Title:"May rout turns to June draft",
                                                img:"http://www.marketwatch.com/story/how-to-pick-a-disability-insurance-plan-2012-05-14",
                                                summary:"As a home buyer or refinancer, you’d expect to submit recent pay stubs and bank-account statements when applying for a mortgage loan. But a copy of your college transcripts? Or a decades-old divorce decree? Borrowers who have recently"
                                            },
                                            {
                                                channelName:"Finance & Markets",
                                                Title:"Skip the dorm, buy a condo",
                                                img:"http://www.marketwatch.com/story/skip-the-dorm-buy-your-kid-a-condo-2012-05-14",
                                                summary:"Low real-estate prices—and sweet tax breaks—may make buying a condo preferable to student housing for your college students."
                                            },
                                            {
                                                channelName:"Finance & Markets",
                                                Title:"Why less talk can make you more money",
                                                img:"http://ei.marketwatch.com/Multimedia/2012/05/31/Photos/MC/MW-AR868_listen_20120531174641_MC.jpg?uuid=2a3629e6-ab6a-11e1-9705-002128049ad6",
                                                summary:"This is a critical time to listen carefully, after the worst month in two years for the Dow Jones Industrial Average DJIA -0.21%  and the Nasdaq Composite Index COMP -0.35% . A slower-growth, overly indebted world is a "
                                            }
                                          ]
                                  };
        cs["Presidential Election"] = { name: "Presidential Election",
                                          items:[
                                                  {
                                                      channelName:"Presidential Election",
                                                      Title:"May rout turns to June draft",
                                                      img:"http://www.marketwatch.com/story/how-to-pick-a-disability-insurance-plan-2012-05-14",
                                                      summary:"As a home buyer or refinancer, you’d expect to submit recent pay stubs and bank-account statements when applying for a mortgage loan. But a copy of your college transcripts? Or a decades-old divorce decree? Borrowers who have recently"
                                                  },
                                                  {
                                                      channelName:"Presidential Election",
                                                      Title:"Skip the dorm, buy a condo",
                                                      img:"http://www.marketwatch.com/story/skip-the-dorm-buy-your-kid-a-condo-2012-05-14",
                                                      summary:"Low real-estate prices—and sweet tax breaks—may make buying a condo preferable to student housing for your college students."
                                                  },
                                                  {
                                                      channelName:"Presidential Election",
                                                      Title:"Why less talk can make you more money",
                                                      img:"http://ei.marketwatch.com/Multimedia/2012/05/31/Photos/MC/MW-AR868_listen_20120531174641_MC.jpg?uuid=2a3629e6-ab6a-11e1-9705-002128049ad6",
                                                      summary:"This is a critical time to listen carefully, after the worst month in two years for the Dow Jones Industrial Average DJIA -0.21%  and the Nasdaq Composite Index COMP -0.35% . A slower-growth, overly indebted world is a "
                                                  }
                                                ]
                                        };
        cs["Technology"] = { name: "Technology",
                                          items:[
                                                  {
                                                      channelName:"Technology",
                                                      Title:"May rout turns to June draft",
                                                      img:"http://www.marketwatch.com/story/how-to-pick-a-disability-insurance-plan-2012-05-14",
                                                      summary:"As a home buyer or refinancer, you’d expect to submit recent pay stubs and bank-account statements when applying for a mortgage loan. But a copy of your college transcripts? Or a decades-old divorce decree? Borrowers who have recently"
                                                  },
                                                  {
                                                      channelName:"Technology",
                                                      Title:"Skip the dorm, buy a condo",
                                                      img:"http://www.marketwatch.com/story/skip-the-dorm-buy-your-kid-a-condo-2012-05-14",
                                                      summary:"Low real-estate prices—and sweet tax breaks—may make buying a condo preferable to student housing for your college students."
                                                  },
                                                  {
                                                      channelName:"Technology",
                                                      Title:"Why less talk can make you more money",
                                                      img:"http://ei.marketwatch.com/Multimedia/2012/05/31/Photos/MC/MW-AR868_listen_20120531174641_MC.jpg?uuid=2a3629e6-ab6a-11e1-9705-002128049ad6",
                                                      summary:"This is a critical time to listen carefully, after the worst month in two years for the Dow Jones Industrial Average DJIA -0.21%  and the Nasdaq Composite Index COMP -0.35% . A slower-growth, overly indebted world is a "
                                                  }
                                                ]
                                        };

        cs["Entertainment"] = { name: "Entertainment",
                                          items:[
                                                  {
                                                      channelName:"Entertainment",
                                                      Title:"May rout turns to June draft",
                                                      img:"http://www.marketwatch.com/story/how-to-pick-a-disability-insurance-plan-2012-05-14",
                                                      summary:"As a home buyer or refinancer, you’d expect to submit recent pay stubs and bank-account statements when applying for a mortgage loan. But a copy of your college transcripts? Or a decades-old divorce decree? Borrowers who have recently"
                                                  },
                                                  {
                                                      channelName:"Entertainment",
                                                      Title:"Skip the dorm, buy a condo",
                                                      img:"http://www.marketwatch.com/story/skip-the-dorm-buy-your-kid-a-condo-2012-05-14",
                                                      summary:"Low real-estate prices—and sweet tax breaks—may make buying a condo preferable to student housing for your college students."
                                                  },
                                                  {
                                                      channelName:"Entertainment",
                                                      Title:"Why less talk can make you more money",
                                                      img:"http://ei.marketwatch.com/Multimedia/2012/05/31/Photos/MC/MW-AR868_listen_20120531174641_MC.jpg?uuid=2a3629e6-ab6a-11e1-9705-002128049ad6",
                                                      summary:"This is a critical time to listen carefully, after the worst month in two years for the Dow Jones Industrial Average DJIA -0.21%  and the Nasdaq Composite Index COMP -0.35% . A slower-growth, overly indebted world is a "
                                                  }
                                                ]
                                        };

        cs["Sports"] = { name: "Sports",
                                          items:[
                                                  {
                                                      channelName:"Sports",
                                                      Title:"May rout turns to June draft",
                                                      img:"http://www.marketwatch.com/story/how-to-pick-a-disability-insurance-plan-2012-05-14",
                                                      summary:"As a home buyer or refinancer, you’d expect to submit recent pay stubs and bank-account statements when applying for a mortgage loan. But a copy of your college transcripts? Or a decades-old divorce decree? Borrowers who have recently"
                                                  },
                                                  {
                                                      channelName:"Sports",
                                                      Title:"Skip the dorm, buy a condo",
                                                      img:"http://www.marketwatch.com/story/skip-the-dorm-buy-your-kid-a-condo-2012-05-14",
                                                      summary:"Low real-estate prices—and sweet tax breaks—may make buying a condo preferable to student housing for your college students."
                                                  },
                                                  {
                                                      channelName:"Sports",
                                                      Title:"Why less talk can make you more money",
                                                      img:"http://ei.marketwatch.com/Multimedia/2012/05/31/Photos/MC/MW-AR868_listen_20120531174641_MC.jpg?uuid=2a3629e6-ab6a-11e1-9705-002128049ad6",
                                                      summary:"This is a critical time to listen carefully, after the worst month in two years for the Dow Jones Industrial Average DJIA -0.21%  and the Nasdaq Composite Index COMP -0.35% . A slower-growth, overly indebted world is a "
                                                  }
                                                ]
                                        };

        cs["Work Related"] = { name: "Work Related",
                                          items:[
                                                  {
                                                      channelName:"Word Related",
                                                      Title:"May rout turns to June draft",
                                                      img:"http://www.marketwatch.com/story/how-to-pick-a-disability-insurance-plan-2012-05-14",
                                                      summary:"As a home buyer or refinancer, you’d expect to submit recent pay stubs and bank-account statements when applying for a mortgage loan. But a copy of your college transcripts? Or a decades-old divorce decree? Borrowers who have recently"
                                                  },
                                                  {
                                                      channelName:"Word Related",
                                                      Title:"Skip the dorm, buy a condo",
                                                      img:"http://www.marketwatch.com/story/skip-the-dorm-buy-your-kid-a-condo-2012-05-14",
                                                      summary:"Low real-estate prices—and sweet tax breaks—may make buying a condo preferable to student housing for your college students."
                                                  },
                                                  {
                                                      channelName:"Word Related",
                                                      Title:"Why less talk can make you more money",
                                                      img:"http://ei.marketwatch.com/Multimedia/2012/05/31/Photos/MC/MW-AR868_listen_20120531174641_MC.jpg?uuid=2a3629e6-ab6a-11e1-9705-002128049ad6",
                                                      summary:"This is a critical time to listen carefully, after the worst month in two years for the Dow Jones Industrial Average DJIA -0.21%  and the Nasdaq Composite Index COMP -0.35% . A slower-growth, overly indebted world is a "
                                                  }
                                                ]
                                        };
        return cs[channelName];

    }


});