module.exports = {
    name: 'bluetext',
    aliases: ["blue"],
    timeout: 2000,

    run: async (bot, message, args) =>{
        let bluemessage = args.join(" ");
        if(!bluemessage) return message.channel.send(`what do ya wanna say in blue?`);
        message.channel.send(`\`\`\`ini\n[${bluemessage}]\n\`\`\``);
    }
}