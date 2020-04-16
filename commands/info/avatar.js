const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'shows a person avatar',
    usage: 't!avatar <mention>',
    aliases: ["av"],
    timeout: 5000,

    run: async (bot, message, args) =>{
        const member = message.mentions.users.first() || message.author

        const avEmbed = new MessageEmbed()
        .setAuthor(member.tag, member.displayAvatarURL())
        .setTitle("Avatar")
        .setColor("RANDOM")
        .setImage(member.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setTimestamp()
        message.channel.send(avEmbed);
    }
}