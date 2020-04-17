const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'render',
    description: 'growtopia world render',
    usage: 'render <world name>',
    timeout: 4000,

    run: async (bot, message, args) =>{
        let worldname = args.join(" ");
        let image = `https://s3.amazonaws.com/world.growtopiagame.com/${worldname}.png`;
        if(!image)
        return message.channel.send("world render doesn't exist/world owner didn't render the world.");

        let render = new MessageEmbed()
        .setTitle("Growtopia World Render")
        .setDescription(`World Name: ${worldname}`)
        .setImage(image)
        .setColor("RANDOM")
        .setFooter("Growtopia World Render")
        .setTimestamp()
        
        message.channel.send(render);
    }
}