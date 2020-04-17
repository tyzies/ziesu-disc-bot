const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'render',
    description: 'growtopia world render',
    usage: 'render <world name>',
    aliases: ["worldrender", "renderworld", "gtrender"],
    timeout: 4000,

    run: async (bot, message, args) => {
        let worldname = args.join(" ").toLowerCase();
        let image = `https://s3.amazonaws.com/world.growtopiagame.com/${worldname}.png`;
        if (!worldname)
            return message.channel.send("what world do ya wanna render?");
        if (image.thumbnail = null)
            return message.channel.send("World doesn't exist/World owner didn't render the world yet.");
        if (args[1])
            return message.channel.send("woah slow down. no spaces please.");

        let render = new MessageEmbed()
            .setTitle("Growtopia World Render")
            .setDescription(`<a:lr:698779764823031819> World Name: ${worldname.toUpperCase()}\n<a:no:699881296515825664> No image = World doesn't exist/World owner didn't render the world yet.`)
            .setImage(image)
            .setColor("RANDOM")
            .setFooter("Growtopia World Render")
            .setTimestamp()

        message.channel.send(render);

    }
}