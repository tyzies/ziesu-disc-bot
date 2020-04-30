const pref = require('../../config.json')
const prefix = pref.prefix

module.exports = bot => {
    console.log("im ready yeeeeet");

    bot.user.setActivity(`${prefix}help`, { type: "STREAMING", url: 'https://twitch.tv/jemplix' });
}