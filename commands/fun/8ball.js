const { response } = require('../../assets/arrays/8ball.json')
const { randomInArray } = require('../../functions')

module.exports = {
    name: "8ball",
    description: "There is a big chance I insult you!",
    category: "fun",
    aliases: ["ask"],
    timeout: 5000,

    run: async (bot, message, args) => {
        let question = message.content.slice(bot.prefix.length + 6)
        if (!question) return message.channel.send(`what do you wanna ask?`)
        else {
            let responses = randomInArray(response)

            message.channel.send(responses);
        }
    }
}