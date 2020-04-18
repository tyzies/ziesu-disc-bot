const { MessageEmbed } = require('discord.js');

module.exports = {

        name: 'clear',
        description: 'clears messages',
        usage: 'tclear <how many messages u want>',
        accessability: '@Owner, @Moderator',
        aliases: ['delete', 'purge'],
        timeout: 5000,
    
    run: async (bot, message, args) => {
        const amount = parseInt(args[0]) + 1;

        if(!args[0])
        return message.channel.send("how many messages do ya wanna delete?");

        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"]))
        return message.channel.send("you dont have perms, sad.")

		if (isNaN(amount)) {
			return message.reply('that isn\'t a valid number, sir.');
		} else if (amount <= 1 || amount > 1001) {
			return message.reply('the limit is up to 1000 messages. put a number between 1 and 1000.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to clear messages in this channel');
        });
        
        message.channel.send(`cleared ${amount - 1} messages, yay.`).then(message =>{
            message.delete({ timeout: 5000 })
        });
    }
}