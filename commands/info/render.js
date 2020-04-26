const { MessageEmbed } = require('discord.js');
const request = require('request');

module.exports = {
    name: 'render',
    description: 'growtopia world render',
    usage: 'render <world name>',
    aliases: ["worldrender", "renderworld", "gtrender"],
    timeout: 4000,

    run: async (bot, message, args) => {
        let worldname = args.join(" ").toLowerCase();
        let image = `https://s3.amazonaws.com/world.growtopiagame.com/${worldname}.png`;

        request(image, function (err, response, body) {
            if (err) console.log(err)
            body = JSON.parse(body)
        });

        if (args[1])
            return message.channel.send("woah slow down. no spaces please.");
        if (!body)
            return message.channel.send("that world doesn't exist/world owner didn't render the world.")

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