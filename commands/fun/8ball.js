module.exports={
    name: "8ball",
    description: "There is a big chance I insult you!",
    category: "fun",
    aliases: ["ask"],
    timeout: 5000,
    
    run: async(bot,message,args)=>{
        let question = message.content.slice(bot.prefix.length+6)
        if(!question)return message.channel.send(`You did not specify your question!`)
        else{
            let responses=[
                "pfft, try me.",
                "lmao nope",
                "ofc yes",
                "yep",
                "try asking me again. i'm bot-TIRED. get it?",
                "nah not in a million years."
            ]
            let response = responses[Math.floor(Math.random()*(responses.length)-1)]
            
            message.channel.send([response]);
        }
    }
}