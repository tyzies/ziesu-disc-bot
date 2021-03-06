const { MessageEmbed } = require('discord.js');
const pref = require('../../config.json');
const prefix = pref.prefix;
const version = "v1.5"

module.exports = {
    name: 'invite',
    description: 'invite link',
    aliases: ["invitelink"],
    timeout: 3000,

    run: async (bot, message, args) =>{
        let inviteEmbed = new MessageEmbed()
        .setAuthor(`${bot.user.username} Invite`, bot.user.displayAvatarURL())
        .setThumbnail(bot.user.displayAvatarURL())
        .setDescription(`<a:lr:698779764823031819> [Invite Link](https://discordapp.com/oauth2/authorize?client_id=694178512843702362&scope=bot&permissions=2146958847)\nVersion: ${version}\nPrefix: \`${prefix}\`\n\n<a:lr:698779764823031819> **IMPORTANT NOTICES:**\nStill *in beta* so expect bugs.`)
        .setColor(0x03fc17)
        .setTimestamp();
        message.author.send(inviteEmbed);
        message.channel.send("Sent to your DMs.")
    }
}