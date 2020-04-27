const { MessageEmbed } = require('discord.js')
const { sleep } = require('../../functions')

module.exports = {
    name: "ping",
    category: 'info',
    description: "Returns latency and API ping",
    timeout: 3000,

    run: async (bot, message, args) => {
        let msg = await message.channel.send(`🏓 Pinging....`)
        await sleep(1900)
        const _ = new MessageEmbed()
                .setTitle('<a:EDM:657499933682958336>   Pong!')
                .setDescription(`Ping: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nBot's Ping: ${Math.round(bot.ws.ping)}ms`)
                .setColor('RANDOM')

                msg.edit(_);
    }   
}