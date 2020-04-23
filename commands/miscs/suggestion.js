const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'suggestion',
    description: 'logs all suggestion from members',
    usage: 't.suggest <suggestion>',
    aliases: ["suggest", "suggesting"],
    timeout: 3000,

    run: async (bot, message, args) => {
        let sugChannel = message.mentions.channels.first();
        if (!sugChannel) return message.channel.send("include the channel please.")
        if (sugChannel.id != '698162686474715197')
            return message.channel.send("that's not the suggestion channel!");

        let suggestion = args.slice(1).join(" ");


        if (!suggestion) return message.channel.send('what do you wanna suggest? include a message.');

        let sugEmbed = new MessageEmbed()
            .setTitle("<:sanswink:699891393958641724> New Suggestion!")
            .setDescription(`${suggestion}\n\n\`suggestion by ${message.author.tag}\``)
            .setColor(0xff05d1)
            .setTimestamp()
        sugChannel.send(sugEmbed).then(message =>{
            message.react('<a:yes:699881212520562799')
            message.react('<a:no:699881296515825664')
        })

        message.channel.send("sent the suggestion.")
        return;

    }
}
