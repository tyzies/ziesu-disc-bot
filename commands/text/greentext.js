module.exports = {
    name: 'greentext',
    aliases: ["green"],
    timeout: 2000,

    run: async (bot, message, args) => {
        let greenmessage = args.join(" ");
        if(!greenmessage) return message.channel.send(`what do u wanna say in green?`);
        message.channel.send(`\`\`\`css\n${greenmessage}\n\`\`\``);
    }
}