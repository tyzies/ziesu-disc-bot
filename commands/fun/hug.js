const { MessageEmbed } = require('discord.js');
const { hug } = require('../../assets/arrays/hugurl.json');
const { randomInArray } = require('../../functions');

module.exports = {
    name: 'hug',
    description: 'hugs a member',
    aliases: ["peluk"],
    timeout: 3000,

    run: async (bot, message, args) => {

        let hugs = randomInArray(hug)

        let hugPerson = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!hugPerson) return message.channel.send('who do you wanna hug? uwu');
        if (hugPerson.id === message.author.id) return message.channel.send("you can't hug yourself, bud.");
        if (hugPerson.id === '694178512843702362') return message.channel.send("u-u-uhm.. he-heh.. th-thanks b-but you sh-shou-should h-h-hug somebody else *blush*")

        let hugEmbed = new MessageEmbed()
            .setTitle(`${message.author.username} hugged ${hugPerson.user.username}. how cute.`)
            .setImage(url = `${hugs}`)

        message.channel.send(hugEmbed);
    }
}