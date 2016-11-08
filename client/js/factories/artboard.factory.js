myApp.factory('artboardFactory', function($http){
	var factory = {};

	factory.getArtboards = function(callback){
		callback([
			{
				title: "Creating a business card",
				createdAt: "Nov 6th 2016",
				imgUrl: "./../assets/Images/BrandonsBusinessCard.png",
				description: "I wanted to make a potential business card design. So the first thing I did was look at some business card information online and some examples of business card designs. I was able to determine that fontsizes of 8-10pt were good for details, what information I would want on the card, and what the dimensions I would need for the design. I opened up photoshop and created two artboards at 3.5in by 2in. I labeled one of them front, and the other back. I knew I wanted a modern, minimal design. Next I had to decide on a color scheme, so I remembered the dark orange color from my portfolio site, and wanted that to be the focus. From there it was just testing some typefaces and I had an idea of what assets I would be working with. After testing some ideas I realized I really wanted a logo to put on it. I opened up Illustrator and started playing with some shapes. I liked boxes and grids. After a few different ideas, I landed on the design you see here. I picked a hashtag symbol because my favorite media platform is twitter at the moment, and I really like the idea of social media marketing. I knew the logo would be good because it is simple, and instantly rememberable. After I put all the elements together and had a finished product, I exported the file as svg, png, jpg and psd. This way I could easily get the file I needed. For the web export I set the color scheme to RGB, and for the jpg I had it set to CMYK. I have not decided if I will purchase these yet, but I enjoyed the process of creating it.",
				tags: [
					"logo", "photoshop", "illustrator", "business card", "design", "branding"
				],
				comments: [
					{
						username: "Candyman2113",
						createdAt: "Nov 6th 2016",
						comment: "Do you always use adobe products? I am a windows user, and i'm looking for alternatives",
						replies: [
							{
								username: "BrandonScott",
								createdAt: "Nov 6th 2016",
								reply: "I personally recommend you get adobe cc, just because it is the industry standard. I know it kind of sucks to conform, but cc does have a ton of super powerful tools. I think after you get used to it you will feel good about it."
							}
						]
					}
				]
			}
		])
	}

  return factory;
});
