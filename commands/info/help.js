const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');
const prefix = config.prefix;

module.exports = {
    name: "help",
    description: "list of comamnds",
    usage: "t!help <fun, moderation, info>",
    aliases: ["h"],
    category: "info",
    timeout: 2000,

    run: async (bot, message, args) =>{
        if(args[0] === 'fun'){
            let fEmbed = new MessageEmbed()
            .setTitle("<a:PepeDance:657497966214512661>   Fun Commands")
            .setDescription("``8ball``, ``meme``, ``say``, ``howgay``, ``penis``, ``hug``, ``hack``")
            .setColor("RANDOM")
            .setFooter('made by tyzies#9020')
            message.channel.send(fEmbed);
            return;
        }
        if(args[0] === 'moderation'){
            let mEmbed = new MessageEmbed()
            .setTitle("<a:siren:657601372195389461>   Moderation Commands")
            .setDescription("``ban``, ``kick``, ``role <create, delete>``, ``unban``, ``snipe``, ``addrole``, ``removerole``, ``clear``")
            .setColor("RANDOM")
            .setFooter('made by tyzies#9020')
            message.channel.send(mEmbed);
            return;
        }
        if(args[0] === 'info'){
            let iEmbed = new MessageEmbed()
            .setTitle('<a:BlobThink:657601443511140353>   Info Commands')
            .setDescription("``help``, ``ping``, ``avatar``, ``invite``, ``serverinfo``, ``userinfo``, ``fortnite``, ``uptime``, ``corona``, ``render``, ``version``")
            .setColor("RANDOM")
            .setFooter('made by tyzies#9020')
            message.channel.send(iEmbed);
            return;
        } 
        if (args[0] === 'text'){
            let tEmbed = new MessageEmbed()
            .setTitle('<a:owoO:657498056815673344><a:owoW:657498068882685952><a:owoO:657498056815673344>   Text Commands')
            .setDescription("``embed``, ``orangetext``, ``yellowtext``, ``greentext``, ``bluetext``")
            .setColor("RANDOM")
            .setFooter('made by tyzies#9020')
            message.channel.send(tEmbed);
            return;
        }
        if (args[0] === 'misc'){
            let miscEmbed = new MessageEmbed()
            .setTitle('<a:BlurpKek:657601256000323585>   Miscellaneous Commands')
            .setDescription("``suggestion``")
            .setColor("RANDOM")
            .setFooter('made by tyzies#9020')
            message.channel.send(miscEmbed)
            return;
        }
        else if(!args[0]) {
            let hEmbed = new MessageEmbed()
            .setAuthor(bot.user.username, bot.user.displayAvatarURL())
            .setTitle("<:sanswink:699891393958641724>   Commands List")
            .setDescription(`Prefix: \`${prefix}\``)
            .addField(`<a:PepeDance:657497966214512661>   Fun`, `\`${prefix}help fun\``)
            .addField("<a:siren:657601372195389461>   Moderation", `\`${prefix}help moderation\``)
            .addField("<a:BlobThink:657601443511140353>   Info", `\`${prefix}help info\``)
            .addField("<a:owoO:657498056815673344><a:owoW:657498068882685952><a:owoO:657498056815673344>   Text", `\`${prefix}help text\``)
            .addField("<a:BlurpKek:657601256000323585>   Miscellaneous", `\`${prefix}help misc\``)
            .setFooter("Bugs? Contact tyzies#9020 | Command Display inspired by Dank Memer")
            .setColor("0x00b9fc")
            message.channel.send(hEmbed);
            return;
        }
        else {
            message.channel.send(`${args.join(" ")} help list doesn't exist, dumb dumb.`);
        }
    }
}
