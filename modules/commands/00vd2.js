module.exports.config = {
	name: "yo",
	version: "1.0",
	hasPermssion: 0,
	credits: " hamim xromim",
	description: "yo",
  usePrefix:true,
	commandCategory: "yo",
	usages: "Yo",
	cooldowns: 30,
};
 
module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var red = ["https://3488fdf3-2dc0-45ad-9453-128caa008de5-00-2esipulcrfk5b.pike.replit.dev/"]
  var redroom = red[Math.floor(Math.random() * red.length)]
  axios.get(redroom).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `«//√♣API BY♦🅁🄾🄼🄸🄼♪X2»`,
            attachment: fs.createReadStream(__dirname + `/data/kanna.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/data/kanna.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/data/kanna.${ext}`)).on("close", callback);
      })
}