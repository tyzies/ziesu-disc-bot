const { MessageEmbed } = require('discord.js');
const api = require('imageapi.js');
const { randomInArray, sleep } = require('../../functions');
const { subreddits } = require('../../assets/arrays/subreddits.json');

module.exports = {
    name: "meme",
    description: "Get a meme!",
    category: "fun",
    aliases: ["dankmeme", "memes", "dankmemek"],

    run: async (bot, message, args) => {
        let subreddit = randomInArray(subreddits)
        let img = await api(subreddit)

        let msg = await message.channel.send("fetching memes..");
        await sleep(1300)
        const memeEmbed = new MessageEmbed()
            .setTitle(`r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img)
        msg.edit(memeEmbed);

    }
}