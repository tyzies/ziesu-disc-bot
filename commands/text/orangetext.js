module.exports = {
    name: 'orangetext',
    aliases: ["orange"],
    timeout: 2000,

    run: async (bot, message, args) =>{
        let orangemessage = args.join(" ");
        if(!orangemessage) return message.channel.send(`what do you wanna say in orange?`);
        message.channel.send(`\`\`\`fix\n${orangemessage}\n\`\`\``)
    }
}