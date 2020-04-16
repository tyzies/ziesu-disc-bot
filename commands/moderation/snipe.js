const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'snipe',
    desc: 'logs deleted message',
    timeout: 3000,

    run: async (bot, message, args) => {
            const msg = bot.snipes.get(message.channel.id);
            if (!msg) return message.channel.send("no deleted messages, sir. or you ran the command in the wrong channel.");

            const embed = new MessageEmbed()
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
            .setDescription(msg.content)
            .setColor("RANDOM")
            .setTimestamp()

            if(msg.image) embed.setImage(msg.image);

            message.channel.send(embed);
        }
    }