module.exports.config = {
	name: "anime",
	version: "1.0",
	hasPermssion: 0,
	credits: "Hamim x romim",
	description: "anime",
  usePrefix:true,
	commandCategory: "Anime",
	usages: "",
	cooldowns: 30,
};
 
module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var red = ["https://08d4a29d-2b43-46b4-ae8c-b8c0c57305ad-00-1orp9kygzseve.pike.replit.dev/"]
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