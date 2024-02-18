module.exports.config = {
  name: "porichoy",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "",
  commandCategory: "noprefix",
  usePrefix: false,
  usages: "islam",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["battery"] !== "undefined" && thread["battery"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == global.data.botID) return;
  function out(data) {
api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    api.sendMessage(data, threadID, messageID)
  }
  //reply
  var msg = {
    body: `#পরিচয়-পর্ব ! 😚🤙

࿐❥ আসসালামু আলাইকুম ! 🥰

࿐❥ 𝑵𝒂𝒎𝒆 :- Romim 🫣😚

࿐❥ From:- 🌺࿐❥?🌺

࿐❥ জন্মস্থানঃ BARODI BAZAR!

࿐❥ পড়াশোনাঃ ( 6 ) 😇

࿐❥  আম্মু আব্বুর মেঝো শয়তান তাহ ! 😅

࿐❥ বয়স :14+🙈

࿐❥ Birthday 25/june/****/......... 🌺

࿐❥ উচ্চতা : ??? 😷

࿐❥ ব্লাড গ্রুপঃ****🤧

࿐❥ প্রিয় রং : Black  🥀
 
࿐❥ প্রিয় স্থানঃ SOUTH KOREA 😘

࿐❥ প্রিয় কাজ : : All 🖤 😍

࿐❥ প্রিয় মানুষ : আম্মু/আব্বু/ )😘

◄⃣⃢⃣🌺 ༄R O M I M シ︎ 🌺⃣⃢⃣►`
  }
  // Gọi bot
  var arr = ["battery"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "",
    "off": "bukaxuda",
    "successText": "",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["parvej"] == "undefined" || data["parvej"] == true) data["parvej"] = false;
  else data["parvej"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["parvej"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
                                     }