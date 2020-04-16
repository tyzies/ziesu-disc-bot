const {MessageEmbed} = require('discord.js')
module.exports={
    name: "role",
    description: "A role utility command",
    category: "utility",
    timeout: 5000,
    
    run: async(bot,message,args)=>{
        if(!message.member.permissions.has("ADMINISTRATOR"))return message.channel.send(`sadly, u dont have the admin perm, ${message.author.username}`)
        if(args[0].toLowerCase()=='create'){
            let rName = message.content.split(`${bot.prefix}role create `).join("")
            let rColor;
            args.forEach(arg=>{
                if(arg.startsWith("#")){
                    rColor=arg
                }
            })
            if(!rName){
                return message.channel.send(`what's the role name gonna be?`)
            }
            if(!rColor){
                return message.channel.send(`what's the color gonna be?`)
            }
            if(rColor>=16777215)return message.channel.send(`that hex color range was too big. Keep it between 0 and 16777215`)
            if(rColor<=0)return message.channel.send(`that hex color range was too small! Keep it between 0 and 16777215`)
            rName=rName.replace(`${rColor}`,``)
            let rNew = await message.guild.roles.create({
                data:{
                    name: rName,
                    color: rColor,
                }
            })
            const Embed = new MessageEmbed()
            .setTitle(`New role!`)
            .setDescription(`${message.author.username} has created the role "${rName}"\nHex Color Code: ${rColor}\nID: ${rNew.id}`)
            .setColor(rColor)
            message.channel.send(Embed)
        }else if(args[0].toLowerCase()=='delete'){
            let roleDelete = message.guild.roles.cache.get(args[1])||message.guild.roles.cache.find(r=>r.name==args[1])
            if(!roleDelete)return message.channel.send(`hey, kiddo. what role do you wanna delete?`)
            roleDelete.delete();
            const Embed1 = new MessageEmbed()
            .setTitle(`Deleted role!`)
            .setColor(roleDelete.color)
            .setDescription(`${message.author.username} has deleted the role "${roleDelete.name}"\nRole ID: ${roleDelete.id}\nRole Hex Color Code: ${roleDelete.color}`)
            message.channel.send(Embed1);
        }
    }
}