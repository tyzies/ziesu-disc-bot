const {MessageEmbed} = require('discord.js')
module.exports={
    name: "kick",
    description: "Kick a specified user from the server",
    category:"moderation",
    usage: "<user id> <reason>",
    timeout: 5000,
    
    run: async(bot,message,args)=>{
        if(!args[0])return message.channel.send(`who d'ya wanna kick? (provide their ID.)`)
        let User = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
        if(!User)return message.channel.send(`that user is not in the server dum dum`)
        if(User.permissions.has("KICK_MEMBERS")) return message.channel.send("cant kick this user. they're godly.")
        if(!message.guild.me.hasPermission(["KICK_MEMBERS"])) return message.channel.send("i don't have the kick members permission.")
        let Reason = message.content.split(`!kick ${User.id} `)
        if(!args[1])return message.channel.send(`why do you wanna kick this butthead? tell me. (reason required.)`)
        if(!Reason) return message.channel.send(`why do you wanna kick this butthead? tell me. (reason required.)`)
        if(!message.member.permissions.has("KICK_MEMBERS"))return message.channel.send(`u don't have kick perms, kid. get outta here`)
        if(User.user.id === '296627878752419850') return message.channel.send('cannot kick him. hes my owner afterall')
        User.kick(Reason)
        
        message.channel.send(`<:BlobSaluteBan:657602844664397844> kicked ${bot.users.cache.get(User.id).username}. adios! <a:PepeHello:657601419016405022>`);
    }
}