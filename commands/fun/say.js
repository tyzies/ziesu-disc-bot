module.exports={
    name: "say",
    description: "Get the bot to say what ever you want!",
    usage: "<msg>",
    timeout: 1000,
    
    run: async(bot,message,args)=>{
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("u don't have perms. go cry in the corner");

        let sayMessage;
        let isChannel = message.mentions.channels.first()

        if(isChannel){
            sayMessage = args.slice(1).join(" ");
            message.delete();
            isChannel.send(sayMessage);
        } else {
            sayMessage = args.join(" ");
            message.delete();
            message.channel.send(sayMessage)
        }
    }
}