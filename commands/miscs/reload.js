module.exports = {
        name: 'reload',
        description: 'reloads comamnds or updates commands',
        usage: 'treload <command name>',
        accessability: 'tyzies#3973',
        aliases: ["update", "re-load", "rl"],
    
    run: async (bot, message, args) => {
        if(message.author.id != "296627878752419850") return message.reply("only my owner can reload commands. go away")
        
        if(!args[0]) return message.reply("what command r u gonna update/reload?")

        let folderName = args[0].toLowerCase()
        let commandName = args[1].toLowerCase()

        try {
            delete require.cache[require.resolve(`../${folderName}/${commandName}.js`)]
            bot.commands.delete(commandName)
            const pull = require(`../${folderName}/${commandName}.js`)
            bot.commands.set(commandName, pull)
        } catch(e) {
            return message.channel.send(`can't reload \`${args[0].toLowerCase()}\`, something is wrong damn.`)
        }

        message.channel.send(`successfully reloaded \`${args[0].toLowerCase()}\`, master!`);
    }
}