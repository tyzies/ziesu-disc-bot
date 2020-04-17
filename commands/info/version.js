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

    run: async (bot, message, args) => {
        let versionEmbed = new MessageEmbed()
            .setTitle(`${bot.username} Updates, Change Logs, Version.`)
            .addDescription(`<a:lr:698779764823031819> Version: v${version}\nPrefix: \`${prefix}\`\n\n<a:lr:698779764823031819> **Updates/Change Logs:**\nNone.`)
            .setFooter(`${bot.username}`, bot.user.displayAvatarURL())

        message.channel.send(versionEmbed);
    }
}