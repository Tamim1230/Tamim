   module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "R4M1M-A6", //don't change the credits please
	description: "Admin and Bot info.",
  usePrefix: false,
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/CRbJZtx.mp4","https://i.imgur.com/LZKk6NR.mp4","https://i.imgur.com/wuDrUJ4.mp4","https://i.imgur.com/PSIqofv.mp4","https://i.imgur.com/zIxl5m7.mp4"
            
];
  
var callback = () => api.sendMessage({body:`•—»✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺
•┄┅═════❁🌺❁═════┅┄•

 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 :TAMIM 🄱🄾🅃

𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : TAMIM ᴀʜᴍᴇᴅ 

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : TAMIM

•┄┅══❁CONCATET❁══┅┄• 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/100061145118425

messenger : m.me/100061145118425


𝐖𝐏 𝐍𝐮𝐦𝐛𝐞𝐫 : jani na

𝐒𝐞𝐚𝐫𝐜𝐡 Tiktok: potibodni na



•┄┅═════❁🌺❁═════┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═════❁🌺❁═════┅┄•

TYPE /admin 

𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : TAMIK BOT

𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.config.PREFIX}

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : TAMIM

•—»✨ 𝐔𝐩𝐭𝐢𝐦𝐞

𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 𝐓𝐢𝐦𝐞 : ${juswa} 

𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds}.

𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠  ༄🌺\n｢🕋｣${global.config.BOTNAME}｢🕋｣`,attachment: fs.createReadStream(__dirname + "/cache/juswa.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.mp4")).on("close",() =>callback());
   };
