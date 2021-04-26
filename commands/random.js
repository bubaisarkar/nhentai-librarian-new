exports.run = async (client, msg, args, color) => {
  let res = await client.embeds.getRandom();
  await client.embeds.getInfoEmbed(res.id, msg);
};

exports.conf = {
  aliases: [],
  cooldown: "15"
};

exports.help = {
  name: "random",
  description: "Get random nhentai book ID",
  usage: "random"
};
