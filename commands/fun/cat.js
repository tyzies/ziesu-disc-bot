const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
const fetch = require('node-fetch');

module.exports = {
    
        name: 'cat',
        description: 'sends a random cat image',
        usage: 'tcat',
        accessableby: '@Member',
        category: 'miscellaneous',
        aliases: ["cutecats", "cutecat", "kucing", "neko"],
    
    run: async (bot, message, args) => {
            let msg = await message.channel.send("generating a cat picture...")
                fetch(`http://aws.random.cat/meow`)
                .then(res => res.json()).then(body => {

            if (!body) return message.channel.send("can't generate image! try again.");

            let catEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`${bot.user.username.toLowerCase()} Cats`, message.guild.iconURL)
                .setImage(body.file)
                .setTimestamp()
                .setFooter(bot.user.username.toLowerCase(), bot.user.displayAvatarURL)
            message.channel.send(catEmbed);

            msg.delete();
        })
    }
}