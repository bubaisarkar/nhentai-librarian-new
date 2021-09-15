const { MessageEmbed } = require("discord.js");

exports.run = async (client, msg, args, color) => {
  const app = await client.fetchApplication();

  if (!args[0]) {
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle("Banned Tags List")
      .addField(
`
- \`Shotacon\`
- \`Lolicon\`
- \`Bestality\`
- \`Futanari\`
- \`Yaoi\`
- \`Amputte\`
- \`Gore\`
- \`Low-Bestiality\`
- \`Scat\`
- \`Low-Shotacon\`
- \`Low-Smegma\`
- \`Smegma\`
- \`Low-Lolicon\`
- \`Centaur\`
- \`Cannibalism\`
- \`Necrophilia\`
- \`Ryona\`
- \`Insect\`
- \`Dog\`
`
      )
      .setFooter(`Nhentai Librarian${client.version})
      .addField(
        "Banned Note: ",
        `Nhentai Librarian Don't show any banned doujins`
      )
      .setTimestamp();
    msg.channel.send(embed);
  } else {
    let cmd = args[0];
    if (
      client.commands.has(cmd) ||
      client.commands.get(client.aliases.get(cmd))
    ) {
      let command =
        client.commands.get(cmd) ||
        client.commands.get(client.aliases.get(cmd));
      if (command.conf.owner)
        return msg.channel.send(
          `Sorry **${msg.author.username}**, I can't find command \`${cmd}\`.`
        );
      let name = `${client.config.PREFIX} ${command.help.name}`;
      let desc = command.help.description;
      let aliases = command.conf.aliases;
      let usage = command.help.usage;
      let usages = Array.isArray(usage) ? usage : [usage];

      let embed = new MessageEmbed()
        .setAuthor(
          client.user.username + " Help Description",
          client.user.displayAvatarURL
        )
        .setTitle(
          aliases[0]
            ? `${name} ❱ ${client.config.PREFIX} ${aliases.join(
                ` ❱ ${client.config.PREFIX} `
              )}`
            : name
        )
        .setDescription(desc)
        .setColor(color)
        .addField(
          "Usage",
          usages[0]
            ? `${client.config.PREFIX} ${usages.join(
                `\n${client.config.PREFIX} `
              )}`
            : usages
        );
      return msg.channel.send(embed);
    }
    if (
      !client.commands.has(cmd) ||
      !client.commands.get(client.aliases.get(cmd))
    ) {
      msg.channel.send(
        `Sorry **${msg.author.username}**, I can't find command \`${cmd}\`.`
      );
    }
  }
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: "bannedtags",
  description: "Display tag banned list",
  usage: "bannedtags"
};
