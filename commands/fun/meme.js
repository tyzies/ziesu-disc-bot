const { MessageEmbed } = require('discord.js');
const api = require('imageapi.js');
const { randomInArray } = require('../../functions');
const { subreddits } = require('../../assets//subreddits.json');

module.exports = {
    name: "meme",
    description: "Get a meme!",
    category: "fun",
    aliases: ["dankmeme", "memes", "dankmemek"],

    run: async (bot, message, args) => {
        let subreddit = randomInArray(subreddits)
        let img = await api(subreddit)

        message.channel.send("lol wait ok").then(msg => {

            const memeEmbed = new MessageEmbed()
                .setTitle(`r/${subreddit}`)
                .setURL(`https://reddit.com/r/${subreddit}`)
                .setColor("RANDOM")
                .setImage(img)

            msg.edit(memeEmbed)
        })

    }
}