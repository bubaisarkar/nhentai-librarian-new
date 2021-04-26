const { MessageEmbed } = require("discord.js");

exports.run = async (client, msg, args, color) => {
  let res = await client.embeds.getById(args[0]);
  let type = args[1];
  let embed = await client.embeds.download(res, type);
  msg.channel.send(embed);
};

exports.conf = {
  aliases: ["download"],
  cooldown: "10"
};

exports.help = {
  name: "download",
  description: "Download nHentai manga",
  usage: "download <Book_ID>"
};
