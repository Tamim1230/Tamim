const axios = require('axios');
module.exports = {
  config: {
    name: "imgur",
    version: "1.0",
    author: "𝐀𝐒𝐈𝐅 X R4M1M",
    countDown: 5,
    role: 0,
    Description: "Imgur link",
    usePrefix:false,
    category: "image",
    guide: {
      en: "{n} reply to image"
    }
  },

  onStart: async function(){},
  onChat: async function({ message, event, args, commandName, api, usersData}) {
       
    const input = event.body;
          if(input && input.trim().toLowerCase().startsWith('imgurl') || input && input.trim().toLowerCase().startsWith('imgur')){
           const data = input.split(" ");
           data.shift();
    const link = event.messageReply?.attachments[0]?.url || data.join(" ");
    try {
        const response = await axios.get(`https://imgur-api-yd3t.onrender.com/dip?url=${encodeURIComponent(link)}`);
      const imgurLink = response.data.data;
      return message.reply(imgurLink);
    } catch (error) {
      console.error(error);
      return message.reply(error);
    }
  }
  }
};
