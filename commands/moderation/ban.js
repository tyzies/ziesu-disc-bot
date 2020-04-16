const {MessageEmbed} = require('discord.js')
module.exports={
    name: "ban",
    description: "Ban a specified user from the server",
    category:"moderation",
    usage: "<user id> <reason>",
    timeout: 5000,
    
    run: async(bot,message,args)=>{
        if(!message.member.permissions.has("BAN_MEMBERS"))return message.channel.send(`u dont have the perms to ban. haha get noob`)
        if(!args[0])return message.channel.send(`who do you even want to ban?`)
        let User = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
        if(User.permissions.has("ADMINISTRATOR", "BAN_MEMBERS")) return message.channel.send("cant ban this user. they're godly.")
        if(!User)return message.channel.send(`that member is not in this server. sad.`)
        let Reason = message.content.split(`!ban ${User.id} `)
        if(!args[1])return message.channel.send(`give reason. don't just ban without it.`)
        if(!Reason) return message.channel.send(`give reason. don't just ban without it.`)
        if(User.user.id === '296627878752419850') return message.channel.send('cannot kick him. hes my owner afterall')
        User.ban(Reason)
       
        message.channel.send(`<:BlobSaluteBan:657602844664397844> banned ${bot.users.cache.get(User.id).username}. bye bye! <a:PepeHello:657601419016405022>`);
    }
}