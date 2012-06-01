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
                    html: "Finance & Markets",
                    width: 370,
                    height:370,
                    channelName:"Finance & Markets"
                },
                 {
                    xtype: 'panel',
                    html: "Presidential Election",
                    width: 370,
                    height:370,
                    channelName:"Presidential Election"
                },
                 {
                    xtype: 'panel',
                    html: "Technology",
                    width: 370,
                    height:370,
                    channelName:"Technology"
                },
                 {
                    xtype: 'panel',
                    html: "Entertainment",
                    width: 370,
                    height:370,
                    channelName:"Entertainment"
                },
                 {
                    xtype: 'panel',
                    html: "Sports",
                    width: 370,
                    height:370,
                    channelName:"Sports"
                },
                 {
                    xtype: 'panel',
                    html: "Work Related",
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
                var data = localObj.getChannelSummary(item._html);
                var tpl = new Ext.XTemplate(response.responseText);
                tpl.overwrite(item.element.dom, data);
                //item.element.dom.innerHTML = response.responseText;
                $(item.element.dom).find('#da-slider').cslider({});
            }
        })
    },


    getChannelSummary: function(channelName) {
        var cs = {};
        cs["Finance & Markets"] = { name: "Finance & Markets",
                                    items:[
                                            {
                                                channelName:"Finance & Markets",
                                                title:"May rout turns to June draft",
                                                img:"https://www.wsjwine.com/images/us/en/brands/wsj/recruitment/template2/header2/oh2_reds10_wsjtheme_save110.jpg",
                                                url:"http://www.marketwatch.com/story/how-to-pick-a-disability-insurance-plan-2012-05-14",
                                                summary:"As a home buyer or refinancer, you’d expect to submit recent pay stubs and bank-account statements when applying for a mortgage loan. But a copy of your college transcripts? Or a decades-old divorce decree? Borrowers who have recently"
                                            },
                                            {
                                                channelName:"Finance & Markets",
                                                title:"Skip the dorm, buy a condo",
                                                img:"http://mw2.wsj.net/_newsimages/columnists/powell_bob.jpg",
                                                url:"http://www.marketwatch.com/story/skip-the-dorm-buy-your-kid-a-condo-2012-05-14",
                                                summary:"Low real-estate prices—and sweet tax breaks—may make buying a condo preferable to student housing for your college students."
                                            },
                                            {
                                                channelName:"Finance & Markets",
                                                title:"Why less talk can make you more money",
                                                img:"http://ei.marketwatch.com/Multimedia/2012/05/31/Photos/MC/MW-AR868_listen_20120531174641_MC.jpg?uuid=2a3629e6-ab6a-11e1-9705-002128049ad6",
                                                summary:"This is a critical time to listen carefully, after the worst month in two years for the Dow Jones Industrial Average DJIA -0.21%  and the Nasdaq Composite Index COMP -0.35% . A slower-growth, overly indebted world is a ",
                                                url:"http://www.marketwatch.com/story/why-less-talk-can-make-you-more-money-2012-06-01?link=MW_story_popular"
                                            }
                                          ]
                                  };
        cs["Presidential Election"] = { name: "Presidential Election",
                                          items:[
                                                  {
                                                      channelName:"Presidential Election",
                                                      title:"Bill Clinton heading to Wisconsin",
                                                      img:"http://www.washingtonpost.com/rf/image_296w/2010-2019/WashingtonPost/2011/09/23/Editorial-Opinion/Graphics/toles09262011.jpg",
                                                      url:"http://www.washingtonpost.com/blogs/plum-line/post/its-official-bill-clinton-heading-to-wisconsin-to-campaign-against-scott-walker/2012/05/31/gJQAHQqa4U_blog.html",
                                                      summary:"Former President Bill Clinton has decided to go to Wisconsin to campaign against Scott Walker in the final days of the battle over whether to recall the Wisconsin Governor, a move that could give a boost to the anti-Walker forces in a campaign that will depend heavily on who turns out to vote, a source familiar with Clinton’s plans confirms to me."
                                                  },
                                                  {
                                                      channelName:"Presidential Election",
                                                      title:"Barack Obama: Drone Warrior",
                                                      img:"http://www.washingtonpost.com/rf/image_296w/2010-2019/WashingtonPost/2011/09/23/Editorial-Opinion/Graphics/toles09262011.jpg",
                                                      url:"http://www.washingtonpost.com/opinions/barack-obama-drone-warrior/2012/05/31/gJQAr6zQ5U_story.html?tid=pm_opinions_pop",
                                                      summary:"A very strange story, that 6,000-word front-page New York Times piece on how, every Tuesday, Barack Obama shuffles baseball cards with the pictures and bios of suspected terrorists from around the world and chooses who shall die by drone strike. He even reserves for himself the decision of whether to proceed when the probability of killing family members or bystanders is significant."
                                                  },
                                                  {
                                                      channelName:"Presidential Election",
                                                      title:"Romney vs. teachers unions: The inconvenient truth",
                                                      url:"http://www.washingtonpost.com/opinions/romney-vs-teachers-unions-the-inconvenient-truth/2012/05/30/gJQA7KVv1U_story.html?tid=pm_opinions_pop",
                                                      img:"http://www.washingtonpost.com/rf/image_296w/2010-2019/WashingtonPost/2012/03/22/Editorial-Opinion/Graphics/toles03232012.jpg",
                                                      summary:"Romney is taking aim at teachers unions, charging that President Obama is unable to stand up to union bosses” whose cause in life is preventing parents from having a meaningful choice or children from having a real chance."
                                                  }
                                                ]
                                        };
        cs["Technology"] = { name: "Technology",
                                          items:[
                                                  {
                                                      channelName:"Technology",
                                                      title:"Windows 8 Release Preview",
                                                      img:"http://cdn2.sbnation.com/entry_photo_images/4196247/DSC_5030-hero_large_verge_medium_landscape.jpg",
                                                      summary:"Two months after unleashing Windows 8 upon the world, Microsoft's back with the latest step toward the release of the company's next operating system: the Windows 8 Release Preview. The new version was supposed to be released the first week in June, but Microsoft is apparently ahead of its development schedule",
                                                      url:"http://www.theverge.com/2012/5/31/3053284/microsoft-windows-8-release-preview"
                                                  },
                                                  {
                                                      channelName:"Technology",
                                                      title:"Facebook Drops Google Chrome Recommendation",
                                                      url:"http://www.favbrowser.com/facebook-drops-google-chrome-support-replaces-it-with-opera/",
                                                      img:"http://www.favbrowser.com/wp-content/uploads/2012/05/operafacebook.gif",
                                                      summary:"It looks like Facebook management decided not to bother with the Google Chrome anymore as their latest “unsupported web browsers” page has since then removed the search giant’s web browser."
                                                  },
                                                  {
                                                      channelName:"Technology",
                                                      title:"Netflix iOS app capitulates to bandwidth caps",
                                                      url:"http://gigaom.com/mobile/new-netflix-ios-app-capitulates-to-bandwidth-caps/",
                                                      img:"http://gigaom2.files.wordpress.com/2012/05/bigger-player_phone_us_2x_2012_05-22.jpeg?w=326&h=217",
                                                      summary:"Carriers like Verizon and AT&T are trying to convince Netflix to pay for the bandwidth its subscribers consume on their networks. Today Netflix delivered a rather oblique response. It’s giving its iPhone customers the option of turning off cellular access to Netflix completely and instead rely on old-fashioned Wi-Fi to deliver their movies and TV"
                                                  }
                                                ]
                                        };

        cs["Entertainment"] = { name: "Entertainment",
                                          items:[
                                                  {
                                                      channelName:"Entertainment",
                                                      title:"Knocked Out Cold In Paris",
                                                      url:"http://www.tmz.com/2012/05/31/justin-bieber-knocked-out-cold-paris-concert-concussion-glass-wall/",
                                                      img:"http://s0.2mdn.net/viewad/2516058/300x250-TMZ-R-Tour-Ad-Summer-WOF.jpg",
                                                      summary:"We just spoke with Justin, who said he was performing on stage, and in between songs he walked backstage and hit the glass.  He says he was disoriented, but went back on stage and finished his set."
                                                  },
                                                  {
                                                      channelName:"Entertainment",
                                                      url:"http://www.deadline.com/2012/05/kate-walsh-leaving-private-practice-13-more-episodes/",
                                                      title:"Kate Walsh Poised To Depart ABC",
                                                      img:"http://www-deadline-com.vimg.net/wp-content/uploads/2012/05/walshkate__120531222157.png",
                                                      summary:"EXCLUSIVE: It looks like Dr. Addison Montgomery, who left Seattle Grace five years ago to move to Los Angeles, will be packing again. I’ve learned that Private Practice star Kate Walsh plans to leave the medical drama after 13 episodes of the upcoming sixth season"
                                                  }
                                                ]
                                        };

        cs["Sports"] = { name: "Sports",
                                          items:[
                                                  {
                                                      channelName:"Sports",
                                                      url:"http://aol.sportingnews.com/nba/story/2012-06-01/okc-thunder-san-antonio-spurs-streak-game-3-score-kevin-durant",
                                                      title:"Oklahoma City Thunder play to potential",
                                                      img:"http://dy.snimg.com/story-image/4/15/2917387/97092-330-0.jpg",
                                                      summary:"One questions the mettle of those playoff teams that don’t bring championship-level intensity to the court on a regular basis. One doubts the alleged contenders that have a way of fading into the night sooner, and more often, than they should."
                                                  }
                                                ]
                                        };

        cs["Work Related"] = { name: "Work Related",
                                          items:[
                                                  {
                                                      channelName:"Work Related",
                                                      url:"http://blog.wordnik.com/the-language-of-the-telegraph",
                                                      title:"The Language of the Telegraph",
                                                      img:"http://chorus.nik.io/chorus/phonograph.png",
                                                      summary:"On this day in 1844, Samuel F.B. Morse sent the first public message over his invention, the telegraph. The message,Some proclaim today Morse Code Day, while others prefer April 27, Morse’s birthday. Either seems like a good time to celebrate telegraph language."
                                                  },
                                                  {
                                                      channelName:"Work Related",
                                                      title:"Skip the dorm, buy a condo",
                                                      img:"http://chorus.nik.io/chorus/phonograph.png",
                                                      url:"http://www.marketwatch.com/story/skip-the-dorm-buy-your-kid-a-condo-2012-05-14",
                                                      summary:"Low real-estate prices—and sweet tax breaks—may make buying a condo preferable to student housing for your college students."
                                                  }
                                                ]
                                        };
        return cs[channelName];

    }


});