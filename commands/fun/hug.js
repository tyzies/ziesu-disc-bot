const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hug',
    description: 'hugs a member',
    aliases: ["peluk"],
    timeout: 3000,

    run: async (bot, message, args) => {
        let hug = [
            'https://i.imgur.com/Ltmb8aa.gif',
            'https://i.imgur.com/c3WzMZu.gif',
            'https://i.imgur.com/XOYzWBp.gif',
            'https://i.imgur.com/QDkZ3QK.gif',
            'https://i.imgur.com/mvDeiFR.gif',
            'https://i.imgur.com/VvoB5Mv.gif'
        ];

        let hugs = hug[Math.floor(Math.random() * hug.length)];

        let hugPerson = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!hugPerson) return message.channel.send('who do you wanna hug? uwu');
        if (hugPerson.id === message.author.id) return message.channel.send("you can't hug yourself, bud.");

        let hugEmbed = new MessageEmbed()
            .setTitle(`${message.author.username} hugged ${hugPerson.user.username}. how cute.`)
            .setImage(url = `${hugs}`)

        message.channel.send(hugEmbed);
    }
}