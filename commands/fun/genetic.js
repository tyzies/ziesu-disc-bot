const { sleep } = require('../../functions');

module.exports = {
    name: 'genetic',
    description: 'genetic troll lol',
    aliases: ["genetics", "generation"],
    timeout: 5000,

    run: async (bot, message, args) => {
        let user = message.mentions.users.first() || message.author;
        if (args[1])
            return message.channel.send("No spaces please, thanks.");

        let rate = Math.floor(Math.random() * 100);

        let country = [
            "Australian",
            "American",
            "Asian",
            "Indonesian",
            "Bulgarian",
            "European",
            "Arabian"
        ]
        let countries = country[Math.floor(Math.random() * country.length)];

        let trollCountry = [
            "Crow",
            "Chicken",
            "Pig",
            "Dog",
            "Cat",
            "Alien",
            "Cow",
            "Duck",
            "Superhuman!"
        ]
        let troll = trollCountry[Math.floor(Math.random() * trollCountry.length)];

        let msg = await message.channel.send(`You are ${rate}% ${countries}`)
        await sleep(1200)
        await msg.edit(`You are ${rate}% ${countries}`)
        await sleep(1200)
        await msg.edit(`You are ${rate}% ${countries}`)
        await sleep(1200)
        await msg.edit(`You are ${rate}% ${countries}`)
        await sleep(1200)
        await msg.edit(`You are ${rate}% ${countries}`)
        await sleep(1200)
        await msg.edit(`You are ${rate}% ${countries}`)
        await sleep(1200)
        await msg.edit(`You are ${rate}% ${countries}`)
        await sleep(1200)
        await msg.edit(`You are ${rate}% ${countries}`)
        await sleep(1200)
        await msg.edit(`You are ${rate}% ${countries}`)
        await sleep(1200)
        msg.edit(`You are ${rate}% ${troll} :joy:`);
    }
}