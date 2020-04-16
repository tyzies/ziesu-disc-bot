const { MessageEmbed } = require('discord.js');

module.exports = {

        name: 'clear',
        description: 'clears messages',
        usage: 'tclear <how many messages u want>',
        accessability: '@Owner, @Moderator',
        aliases: ['delete', 'purge'],
        timeout: 5000,
    
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permissions, dumbass.");
        if (!args[0]) return message.reply("how many messages r u gonna delete");
        if (args[0] > 1000) return message.reply("the limit is up to 1000 messages!").then(message => message.delete(5000));
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`cleared ${args[0]} messages, yay.`);
        })
    }
}