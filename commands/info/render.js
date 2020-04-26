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
            urlimage = body(image)
        });

        console.log(request)

    }
}