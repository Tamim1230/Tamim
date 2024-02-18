module.exports.config = {
	name: "video",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SI TANVIR 6X",//don't change credit : api.control's.itz-tanvir
	description: "ভিডিও😌",
  usePrefix:true,
	commandCategory: "media",
	usages: "",
	cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs": ""
  }
};

const musicURL = "https://apilovestatus2023-TANVIR.teremakicudi420.repl.co/mp4";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/music_x222')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/music_x222');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/music_x222').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/music_x222/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(musicURL)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.url), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/music_x222/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
          api.sendMessage({
            body: "ভালোবাসি বলে দাও আমায়😌 //Your_Romim🌺",
            attachment: global.nodemodule["fs"].createReadStream(path)
          }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
          return;
        })
        .catch(e => {
          api.sendMessage("Something went wrong...", event.threadID, event.messageID);
          return;
        });
    })
  .catch(e => {
    api.sendMessage("Something went wrong...", event.threadID, event.messageID);
    return;
  });

  return;
}