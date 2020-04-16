module.exports = {
    name: 'yellowtext',
    aliases: ["yellow"],
    timeout: 2000,

    run: async (bot, message, args) =>{
        let yellowmessage = args.join(" ")
        if(!yellowmessage) return message.channel.send(`what'dya wanna say in yellow?`);
        message.channel.send(`\`\`\`fix\n${yellowmessage}\`\`\``);
    }
}