const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "penis",
    description: 'shows how long the user p*nis is lol',
    usage: 'tpenis',
    accessability: '@Member',
    aliases: ["peepee", "itit", "pp"],
    timeout: 5000,

    run: async (bot, message, args) => {
        let penis = ["8=D", "8==D", "8===D", "8====D", "8=====D", "8======D", "8=======D", "8========D", "8=========D", "8==========D"];
        let result = Math.floor((Math.random() * penis.length));
        let ppUser = message.mentions.users.first() || message.author;
        if (ppUser.id === '694178512843702362') return message.channel.send('sadly i dont even have one.')


        let peepeeuser = new MessageEmbed()
            .setTitle(`**peepees size machine**`)
            .setDescription(`${ppUser.username}'s penis\n` + penis[result])
            .setColor(0xff0000)
        message.channel.send(peepeeuser)
    }
}
