module.exports.config = {
  name: "pornhub",
  version: "0.0.2",
  permission: 2,
  prefix: true,
  credits: "Nayan",
  description: "adults video",
  usePrefix:true,
  category: "user",
  usages: "",
    cooldowns: 5,
};





module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    var nayan = require('tinyurl');
    const n = global.nayan_api;
    const { messageID, threadID } = event;


    const { NAYAN } = global.apiNayan;
    let np = args.join(" ");
  var query = args.join(" ");
  api.sendMessage(`searching for ${query} porn video`, event.threadID, event.messageID);

 try {
    const res = await axios.get(`https://main.n4y4n-server.repl.co/nayan/pornhub?name=${np}`);
    var data = res.data.data;
    var msg = [];
    let img1 = `${res.data.normal}`;
   //hd: res.data.best
   //normal: res.data.normal

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/xnxx.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/xnxx.mp4"));

    {
        msg += `✅YOUR PORN VIDEO COLLECTED SUCCESSFULL\ `
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
} catch (err) {
    api.sendMessage(`error`, event.threadID, event.messageID);  
   }
};