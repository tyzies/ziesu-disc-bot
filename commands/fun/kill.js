const { randomInArray } = require('../../functions')
const { kill } = require('../../assets/arrays/kill.json')

module.exports = {

    name: 'kill',
    description: 'sends kill message to a user',
    usage: 'tkill <user>',
    aliases: ["bunuh"],
    timeout: 5000,

    run: async (bot, message, args) => {
        let killMember = message.mentions.users.first();
        if (!killMember) return message.reply("who r u going to kill. tag them or i can't kill them.");
        if (killMember.id === '296627878752419850') return message.channel.send("nope, he's too overpowered af i could get killed instead lmao");
        if (killMember.id === '694178512843702362') return message.channel.send("no thanks.");

        let killz = randomInArray(kill)
        let killss = killz.replace(/\$mention/g, `${killMember.username}`).replace(/\$author/g, `${message.author.username}`).replace(/"/g, ``);

        message.channel.send(killss);
    }
}