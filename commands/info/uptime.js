module.exports = {
    name: 'uptime',
    timeout: 2000,
    aliases: ['up'],

    run: async (bot, message, args) => {
        const moment = require("moment");
        require("moment-duration-format");
        const duration = moment.duration(bot.uptime).format("d[d], h[h], m[m], s[s]");

        message.channel.send(`:watch: **Bot Uptime:** ${duration}`);
    }
}