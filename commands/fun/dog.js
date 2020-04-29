const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
const fetch = require('node-fetch');

module.exports = {
    
        name: "dog",
        description: "sends a random dog image",
        usage: "tdog",
        accessability: "@Member",
        aliases: ["dogs", "cutedogs", "cutedog", "anjing"],

    run: async (bot, message, args) => {
        let msg = await message.channel.send("generating a cute dog...")
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json()).then(body => {

        if(!body) return message.channel.send("can't generate image! try again.");

            let dogEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`tyzies.exe Dogs`, message.guild.iconURL)
            .setImage(body.message)
            .setTimestamp()
            .setFooter("tyzies.exe", bot.user.displayAvatarURL)
            message.channel.send(dogEmbed);

        msg.delete();
        })
    }
}