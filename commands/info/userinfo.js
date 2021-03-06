const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
};

module.exports = {
    name: 'userinfo',
    description: 'gets user info',
    usage: 't!userinfo <member>',
    aliases: ["whois"],
    timeout: 5000,

    run: async (bot, message, args) => {
        var permissions = [];
        var acknowledgements = 'None';

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

        if (message.member.hasPermission("KICK_MEMBERS")) {
            permissions.push("Kick Members");
        }

        if (message.member.hasPermission("BAN_MEMBERS")) {
            permissions.push("Ban Members");
        }

        if (message.member.hasPermission("ADMINISTRATOR")) {
            permissions.push("Administrator");
        }

        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            permissions.push("Manage Messages");
        }

        if (message.member.hasPermission("MANAGE_CHANNELS")) {
            permissions.push("Manage Channels");
        }

        if (message.member.hasPermission("MENTION_EVERYONE")) {
            permissions.push("Mention Everyone");
        }

        if (message.member.hasPermission("MANAGE_NICKNAMES")) {
            permissions.push("Manage Nicknames");
        }

        if (message.member.hasPermission("MANAGE_ROLES")) {
            permissions.push("Manage Roles");
        }

        if (message.member.hasPermission("MANAGE_WEBHOOKS")) {
            permissions.push("Manage Webhooks");
        }

        if (message.member.hasPermission("MANAGE_EMOJIS")) {
            permissions.push("Manage Emojis");
        }

        if (permissions.length == 0) {
            permissions.push("No Key Permissions Found");
        }

        if (`<@${member.user.id}>` == message.guild.owner) {
            acknowledgements = 'Server Owner';
        }

        const embed = new MessageEmbed()
            .setAuthor(`${member.user.username}`, member.user.displayAvatarURL())
            .setColor(randomColor)
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
            .addField("<a:lr:698779764823031819> **Username**", `${member.user.tag}`)
            .addField("<a:lr:698779764823031819> **Status**", `${status[member.user.presence.status]}`, true)
            .addField("<a:lr:698779764823031819> **ID**", `${member.id}`, true)
            .addField('<a:lr:698779764823031819> **Joined At**', `${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
            .addField("<a:lr:698779764823031819> **Created At** ", `${moment(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
            .addField("<a:lr:698779764823031819> **Permissions** ", `${permissions.join(', ')}`, true)
            .addField(`<a:lr:698779764823031819> **Roles [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]**`, `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(" **|** ") || "No Roles"}`, true)
            .addField("<a:lr:698779764823031819> **Acknowledgements** ", `${acknowledgements}`, true);

        message.channel.send(embed);


    }
}   