const { MessageEmbed } = require('discord.js');
const { VultrexDB } = require('vultrex.db');

module.exports = {
    name: 'rank',
    description: 'shows a member rank',
    aliases: ["lvl", "level"],
    timeout: 3000,

    run: async (bot, message, args) =>{
        const db = new VultrexDB({
            provider: "sqlite",
            table: "main",
            fileName: "main"
        })
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const data = await bot.db.get(`level-${message.guild.id}-${member.id}`);
        if(!data) return message.channel.send("this user does not have a rank.");

        let embed = new MessageEmbed()
        .setAuthor(`Rank | ${member.user.tag}`, member.user.displayAvatarURL())
        .setColor("RANDOM")
        .addField("XP:", data.xp, true)
        .addField("Level:", data.level, true)

        message.channel.send(embed)
    }
}