const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 't!say but with embed',
    usage: 't!embed <message>',
    category: "miscellaneous",
    timeout: 2000,

    run: async (bot, message, args) =>{
        let messageEmbed = args.slice(0).join(" ");
        if(!messageEmbed) return message.reply("write a message pls.")

        let sayEmbed = new MessageEmbed()
        .setDescription(`${messageEmbed}`)
        .setColor("RANDOM")
        message.channel.send(sayEmbed);
    }
}