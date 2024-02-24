module.exports.config = {
  name: "#",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ROMIM",
  description: "prefix event",
  usePrefix: false,
  commandCategory: "M H BD",
  usages: "ig",
  cooldowns: 11,
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
   var hi = [ ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [ "https://i.postimg.cc/BvGp5Yjn/received-872459187256856.jpg",
"https://i.postimg.cc/T3bQDMYs/received-823367592328654.jpg",
"https://i.postimg.cc/TwdcFKq8/received-662706595289390.jpg",
"https://i.postimg.cc/Hnj9WFhB/received-649122990208166.jpg",
"https://i.postimg.cc/Hx6tgTBr/received-543202430952647.jpg",
"https://i.postimg.cc/kGZF2fr9/received-5249749015130376.jpg",
"https://i.postimg.cc/hPk1gyb1/received-447748924177906.jpg",
"https://i.postimg.cc/6qvqmqp0/received-1197167194264182.jpg",
"https://i.imgur.com/vcHxEWD.jpg",
"https://i.imgur.com/mce4XfF.jpg",
"https://i.imgur.com/2YYFjUA.jpg",
"https://i.imgur.com/NDQgQLa.jpg",
"https://i.imgur.com/nxHA5Om.jpg",
"https://i.imgur.com/7wwdqUg.jpg",
"https://i.imgur.com/7E926sj.jpg",
"https://i.imgur.com/3g2HDAF.jpg",
"https://i.imgur.com/OHuPguA.jpg",
];
	 var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache.jpg")).on("close",() => callback());
   };
