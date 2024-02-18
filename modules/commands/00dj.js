const fs = require("fs");
module.exports.config = {
	name: "faltu1x",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "FOYSAL HOSEN", 
	description: "Just Respond",
  usePrefix: true,
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("বট লাগবে") ||
     react.includes("লাগবে আমার") || 
react.includes("লাগবে") || 
react.includes("লাগবো") ||
react.includes("bot lagbo") ||
react.includes("vai bot lagbo")) {
		var msg = {
		    body: "•                                                                                                                                        ′                                                                                                                                ′                                                                                                                             '                                                                                                                                                                              ~    বট লাগলে ইনবক্স 💞🥀                                                               ′                                         '                                                               <~  Owner fb Link :https://www.facebook.com/ROMIM                                                                                       Contact :                                       018**5**5**                                                                         •"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }