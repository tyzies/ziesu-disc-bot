const { MessageEmbed } = require('discord.js');
const { randomInArray } = require('../../functions');
const { slapURL, slapMessage } = require('../../assets/arrays/slap.json');

module.exports = {
    name: 'slap',
    description: 'slap someone!',
    usage: '<command> @user',
    timeout: 5000,

    run: async (bot, message, args) => {
        let zies = message.channel;

        let user = message.mentions.users.first();
        if (!user) return zies.send("who do you want to slap? i'll do the job.");
        if (message.author.id === user.id) return zies.send("sorry but you can't slap yourself.")

        let slapgif = randomInArray(slapURL)
        let slapmsg = randomInArray(slapMessage)
        let slapMsg = slapmsg.replace(/\$mention/g, `${user.username}`)
            .replace(/\$author/g, `${message.author.username}`)
            .replace(/\""/g, ``)

        let embed = {
            color: "RANDOM",
            title: `${slapMsg}`,
            author: {
                name: message.author.username,
                icon_url: message.author.displayAvatarURL()
            },
            image: {
                url: slapgif
            }
        }

        zies.send({ embed: embed });
    }
}