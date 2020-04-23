const { MessageEmbed } = require('discord.js');
const pref = require('../../config.json');
const prefix = pref.prefix;
const version = '1.5';

module.exports = {
    name: 'version',
    description: 'shows version and updates',
    usage: 't.version',
    categories: 'information',
    timeout: 5000,
    aliases: ["ver", "v", "updates", "changelogs", "changelog"],

    run: async (bot, message, args) => {
        let versionEmbed = new MessageEmbed()
            .setTitle(`${bot.user.username} Updates, Change Logs, Version`)
            .setDescription(`<a:lr:698779764823031819> Version: v${version}\nPrefix: \`${prefix}\`\n\n<a:lr:698779764823031819> **Updates/Change Logs:**\nNew \`hack\` command!\nDo \`t.hack <person>\`!`)
            .setFooter(`${bot.user.tag}`, bot.user.displayAvatarURL())

        message.channel.send(versionEmbed);
    }
}