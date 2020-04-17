const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'render',
    description: 'growtopia world render',
    usage: 'render <world name>',
    timeout: 4000,

    run: async (bot, message, args) => {
        let worldname = args.join(" ").toLowerCase();
        let image = `https://s3.amazonaws.com/world.growtopiagame.com/${worldname}.png`;
        if (!worldname)
            return message.channel.send("what world do ya wanna render?");

        let render = new MessageEmbed()
            .setTitle("Growtopia World Render")
            .setDescription(`World Name: ${worldname.toUpperCase()}`)
            .setImage(image)
            .setColor("RANDOM")
            .setFooter("Growtopia World Render")
            .setTimestamp()

        message.channel.send(render);

    }
}