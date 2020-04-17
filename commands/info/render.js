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
        if(!message.attachments.size < 0)
        return message.channel.send("World doesn't exist/World owner didn't render the world yet.")

        let render = new MessageEmbed()
            .setTitle("Growtopia World Render")
            .setDescription(`World Name: ${worldname.toUpperCase()}\nNo image = World doesn't exist/World owner didn't render the world yet.`)
            .setImage(image)
            .setColor("RANDOM")
            .setFooter("Growtopia World Render")
            .setTimestamp()

        message.channel.send(render);

    }
}