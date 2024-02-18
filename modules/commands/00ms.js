/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "messi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SI TANVIR 6X",
  description: "বস মেসির ৫০+ ছবি🥰",
  usePrefix: false,
  commandCategory: "Hình ảnh",
  usages: "messi",
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
   var hi = ["messi Picture 💙:50+🦋"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/vZ15FnN9/036965118ddbfb32ad0973aa192a273c.jpg",
"https://i.postimg.cc/ryWbcd7B/06f113dcf6a5c20a486453bff346620b.jpg",
"https://i.postimg.cc/kGcvGdQb/0ca131816107006d91717f2b2e16a238.jpg",
"https://i.postimg.cc/7LWcPSHk/0d16394aba7ed1610771ad923f21fa53.jpg",
"https://i.postimg.cc/zXvgKW5M/11ac54b141df6a9ce49238179832f26e.jpg",
"https://i.postimg.cc/k5K8Dm9g/1333f4c49b48eaabe223f54ba3f3f089.jpg",
"https://i.postimg.cc/K8dBZY6W/15024deba2e1f76df65455fb1e0d6d93.jpg",
"https://i.postimg.cc/c19KxHYc/159dbbf567367c3a9843b9a5f13afa9c.jpg",
"https://i.postimg.cc/mkN899sh/16dbb9fc317234f9b4ea6b36ececbb2f.jpg",
"https://i.postimg.cc/sxN1w6yL/190530e4b6adadeda929a0735606d3b8.jpg",
"https://i.postimg.cc/65MhNt5s/1a7eb9e8dd571e03bcabaec6042ebe83.jpg",
"https://i.postimg.cc/MHPfgZ0d/294b557dd41e6f79d0c478b492821296.jpg",
"https://i.postimg.cc/jS83vyJ7/2d8cb3be3376053f800bd29d504ae70e.jpg",
"https://i.postimg.cc/SKBrtdQJ/2dc694a74d903b8bee82501018ccb494.jpg",
"https://i.postimg.cc/G2nFjpzD/2dddf5ab4678608d1f6d0fb6b6a5e760.jpg",
"https://i.postimg.cc/KcrNJt68/30e8fc4b0adef5f24a47a08012039521.jpg",
"https://i.postimg.cc/9QN1yVvP/3691c4c201e25892511324c9826e1aaf.jpg",
"https://i.postimg.cc/pVqjmkNz/3e4e31269a50d0e3f10c3fbc96bd4b1d.jpg",
"https://i.postimg.cc/63hvLf8s/44c9f087e3b59b5118188cb97abf6941.jpg",
"https://i.postimg.cc/020BMTkZ/48e1f1cf06226ee65248f9e472e8143e.jpg",
"https://i.postimg.cc/QMw4ZsmN/5569890ff39db2be17522bbfb872cd16.jpg",
"https://i.postimg.cc/VNqrmWBS/561adffa99d6675008ed331a3e17d8ae.jpg",
"https://i.postimg.cc/13NVYQ8r/5c0021852ec548496059ffd9f5c8bc71.jpg",
"https://i.postimg.cc/FsC0BpDN/5d066de58a1f5923805c8c7f31837b99.jpg",
"https://i.postimg.cc/VkTBdgCD/655927b6c4ede7bdb9225d4fed91ff6b.jpg",
"https://i.postimg.cc/GtrjbpyR/65f9bdbb19ed76412bd88d3fa93f3e45.jpg",
"https://i.postimg.cc/gjk6MLhx/78ec78a6c29e95ca0ff7ce2283af8ceb.jpg",
"https://i.postimg.cc/QMH4zVpn/850e17b62f02773d64d6352aaec724de.jpg",
"https://i.postimg.cc/BntBSkXj/853dd701dc125fb9f443db1a6b5e3dbd.jpg",
"https://i.postimg.cc/Kvf0vtfH/94bb613899492500cb9d311af0e99908.jpg",
"https://i.postimg.cc/CMjvX3qY/94da95f1c35c0a93c2c0b2be7aaeedcc.jpg",
"https://i.postimg.cc/LXSP1b6B/9642fa027fe46a0dd0cd91dba1198695.jpg",
"https://i.postimg.cc/BbxwCyxS/a3ba7a30e50f22ca6e099053270e95fa.jpg",
"https://i.postimg.cc/Z5YDrw0m/b164e69f824c4c52b274e531e8995cdf.jpg",
"https://i.postimg.cc/26d49fXK/b2b7db91827b3ca055ff307eb625ce6e.jpg",
"https://i.postimg.cc/HnxV0DG5/b83e24c5224c4f53ef33b88ba19e26a7.jpg",
"https://i.postimg.cc/HLy05M0H/b8de90ceace431ad7c407b1854f28ab2.jpg",
"https://i.postimg.cc/tCprjB36/b916c79c240e945a69973ef489b960b7.jpg",
"https://i.postimg.cc/tJ2FyNbd/bbab96475e4b389f92d280688a7ea965.jpg",
"https://i.postimg.cc/7hvW0DJt/be3efd3c04776b7a35eb7f5eab2e9adb.jpg",
"https://i.postimg.cc/634P8TqG/be5facc1c7f2aa1eec2d9626e46b8bbf.jpg",
"https://i.postimg.cc/yN4gMb94/c5f2fda2f3f7be7382b3191aa848b268.jpg",
"https://i.postimg.cc/TwbkRSNV/c64b34e46204b233e189f6edaea3b9d7.jpg",
"https://i.postimg.cc/xjRvKnmk/ccf0f1e6205c96df5a1912776cb1c470.jpg",
"https://i.postimg.cc/YSGR3ZH5/cda2e87c60682830a947215b4b8a8bae.jpg",
"https://i.postimg.cc/J0WptqS9/cf4480d9d90eed867ae4d43db2cdce71.jpg",
"https://i.postimg.cc/QxzWbtdM/d706e42dbf19918b3e02e004e277becd.jpg",
"https://i.postimg.cc/xCLRrmqg/e3c63580c025b269a476b20219689f64.jpg",
"https://i.postimg.cc/wv9tvR0w/e7b754897cfce054ddf0beda7462cbf6.jpg",
"https://i.postimg.cc/8Pzh49dZ/e85d08a629b9337702af65661734ead1.jpg",
"https://i.postimg.cc/ZnT61DGK/ee8d2f564db4c3702ce683d638125f18.jpg",
"https://i.postimg.cc/63z8G6Pt/f17db017874864f1e068009378de6672.jpg",
"https://i.postimg.cc/15QdzmQf/f2d7b0706857167905f09611e89b706a.jpg",
"https://i.postimg.cc/VLfFTdwB/fe43d2dc998992b544a820154dd14981.jpg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };