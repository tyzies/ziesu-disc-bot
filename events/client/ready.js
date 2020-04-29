const pref = require('../../config.json')
const prefix = pref.prefix

module.exports = bot => {
    console.log("im ready yeeeeet");

    let statuses = [
        "in beta!",
        `prefix: ${prefix}`,
        "now with 24/7 hosting!",
        `${bot.guilds.cache.size} servers`,
        `${bot.users.cache.size} members`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, { type: "WATCHING" });
    }, 5000)

}