const { kill } = require('../../assetts')

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

        let kill = [
            `**${killMember.username}** died from falling on a building, so sad.`,
            `a car passed and accidentally crashed into **${killMember.username}**`,
            `theres snakes in **${killMember.username}**'s house and one of the snakes bite **${killMember.username}**`,
            `**${killMember.username}** tried to swim in lava.`,
            `**${killMember.username}** had a rough life and decided to end it. :(`,
            `**${killMember.username}** got sliced by Tanjirou's water breathing technique.`,
            `Zenitsu slept and sliced **${killMember.username}** accidentally. whoopsies.`,
            `Inosuke's beast breathing is too overpowered and killed **${killMember.username}.**`,
            `**${killMember.username}** died from falling.`,
            `**${killMember.username}** is killed by ${message.author}.`,
            `**${killMember.username}** fell into the void.`
        ]
        let kills = kill[(Math.random() * kill.length)];

        message.channel.send(kills)
    }
}