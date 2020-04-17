const { MessageEmbed } = require('discord.js');

module.exports = {
        name: 'howgay',
        description: 'shows how gay is the user',
        usage: 'thowgay',
        accessability: '@Member',
        aliases: ["gay"],
        timeout: 5000,
        
    run: async (bot, message, args) => {
        let percentage = Math.floor(Math.random() * 100);
        let howgaypeople = message.mentions.users.first() || message.author
        if(howgaypeople.id === '296627878752419850') return message.channel.send("totally 0% gay");

        let howgayembed = new MessageEmbed()
        .setTitle("howgay r8 machine")
        .setDescription(`${howgaypeople.username} is ${percentage}% gay :rainbow_flag:`)
        .setColor("RANDOM")

        message.channel.send(howgayembed);
    }
}