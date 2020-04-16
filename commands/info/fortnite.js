const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const fortnite = require('simple-fortnite-api'), client = new fortnite("a900aace-ddd9-49bb-818f-28bfde0e974a")

module.exports = {
    
        name: 'fortnite',
        description: 'sneds a fortnite statistic to the user',
        usage: 'tfortnite <username> <platform>',
        accessability: '@Member',
        aliases: ["ftn", "fortnet"],
        timeout: 5000,
    
    run: async (bot, message, args) => {
        if (!args[0]) return message.channel.send("hey buddy, provide a username, please.")
        if (!args[1] && !["lifetime", "solo", "duo", "squad"].includes(args[1])) return message.channel.send(`okay, okay heres how to use it.\n **Usage:** tfortnite <username> <gametype (solo, duo, etc)>\n **Game types:** Lifetime, Solo, Duo, Squad`)
        let gametype = args[1] ? args[1].toLowerCase() : "lifetime";

        let data = await client.find(args[0])
        if (data && data.code === 404) return message.channel.send("can't find the user.")
        const { image, url, username } = data;
        const { scorePerMin, winPercent, kills, score, wins, kd, matches } = data[gametype]

            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Epic Games Fortnite | ${username}`, image)
            .setThumbnail(image)
            .setDescription(stripIndents`**Gamemode:** ${gametype.slice(0, 1).toUpperCase() + gametype.slice(1)}
            **Kills:** ${kills || 0}
            **Score:** ${score || 0}
            **Score per Min:** ${scorePerMin || 0}
            **Wins:** ${wins || 0}
            **Win %:** ${winPercent || "0%"}
            **Kill/Death Ratio:** ${kd || 0}
            **Matches Played:** ${matches || 0}
            **Link:** [${username}](${url})`)
            .setTimestamp()
            
            message.channel.send(embed)
    }
}