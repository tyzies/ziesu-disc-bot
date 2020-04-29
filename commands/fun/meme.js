const { MessageEmbed } = require('discord.js')
const api = require('imageapi.js');
const { sleep } = require('../../functions')

module.exports = {
    name: "meme",
    description: "Get a meme!",
    category: "fun",
    aliases: ["dankmeme", "memes", "dankmemek"],

    run: async (bot, message, args) =>{
        let subreddits = [
            "comedyheaven",
            "dank",
            "meme",
            "memes"
        ];

        let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)]
        let img = await api(subreddit)

        let msg = await message.channel.send("fetching memes..")
        await sleep(2000)

        const memeEmbed = new MessageEmbed()
        .setTitle(`r/${subreddit}`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor("RANDOM")
        .setImage(img)

        msg.edit(memeEmbed);
        
    }
}
