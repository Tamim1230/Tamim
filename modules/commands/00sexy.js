module.exports.config = {
  name: "sx",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Romim",
  description: "sexy VEDIO",
  usePrefix:true,
  commandCategory: "Hình ảnh",
  usages: "sx vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  var hi = "𝐀𝐈 𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐓𝐎𝐌𝐀𝐑 𝐒𝐄𝐗𝐘 𝐕𝐈𝐃𝐄𝐎 🥵🌺";
  var link = [
    "https://i.imgur.com/vwi6WsW.mp4"
  ];

  var randomLink = link[Math.floor(Math.random() * link.length)];
  var attachmentPath = __dirname + `/cache/${randomLink.substring(randomLink.lastIndexOf('/') + 1)}`;

  var callback = () => api.sendMessage({body: hi, attachment: fs.createReadStream(attachmentPath)}, event.threadID, () => fs.unlinkSync(attachmentPath));    
  
  return request(encodeURI(randomLink))
    .pipe(fs.createWriteStream(attachmentPath))
    .on("close", () => callback());
};
