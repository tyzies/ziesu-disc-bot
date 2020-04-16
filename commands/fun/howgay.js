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
        let howgaypeople = message.mentions.users.first()

        if(howgaypeople) {
            let howgaypeep = new MessageEmbed()
            .setTitle('how gay r8 machine')
            .setDescription(`${howgaypeople.username} is ${percentage}% gay :rainbow_flag:`)
            .setColor("RANDOM")

            message.channel.send(howgaypeep)
        } else {
            let howgay = new MessageEmbed()
            .setTitle('how gay r8 machine')
            .setDescription(`${message.author.username} is ${percentage}% gay :rainbow_flag:`)
            .setColor("RANDOM")

            message.channel.send(howgay)
        }
    }
}