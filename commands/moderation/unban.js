module.exports = {
    name: 'unban',
    aliases: ["uba"],
    timeout: 5000,

    run: async (bot, message, args) =>{
        message.channel.send("this command is being worked on. for now, unban them manually or using another bot. sorry for the inconvenience.")
    }
}