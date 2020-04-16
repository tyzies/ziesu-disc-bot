const { MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = {

        name: 'serverinfo',
        description: "shows the server's info",
        usage: 'tserverinfo',
        accessability: '@Member',
        aliases: ["si", "servinfo", "infoserver", "server"],
        timeout: 5000,
        
    run: async (bot, message, args) => {
        let serverinfo = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Server Info")
            .setThumbnail(message.guild.iconURL())
            .setAuthor(`${message.guild.name}`, message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .addField("<a:lr:698779764823031819> **Server Name**", `${message.guild.name}`, true)
            .addField("<a:lr:698779764823031819> **Server's Owner**", `${message.guild.owner}`, true)
            .addField("<a:lr:698779764823031819> **Total Server Members**", `${message.guild.memberCount}`, true)
            .addField("<a:lr:698779764823031819> **Real Members**", message.guild.members.cache.filter(member => !member.user.bot).size, true)
            .addField("<a:lr:698779764823031819> **Bots**", message.guild.members.cache.filter(member => member.user.bot).size, true)
            .addField("<a:lr:698779764823031819> **Role Count**", `${message.guild.roles.cache.size}`, true)
            .addField("<a:lr:698779764823031819> **Total Channels**", message.guild.channels.cache.size, true)
            .addField("<a:lr:698779764823031819> **Roles**", `${message.guild.roles.cache.map(role => role.toString()).join(', ')}`, false)
            .addField("<a:lr:698779764823031819> **You Joined At**", `${moment(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
            .addField("<a:lr:698779764823031819> **Server Created At**", `${moment(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
            .setFooter("Bugs? DM tyzies#3973", bot.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }));
        message.channel.send(serverinfo);
    }
}