const Timeout = new Set();
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json');
const ms = require('ms');
const { VultrexDB } = require('vultrex.db');

module.exports = async (bot, message) => {

    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    if (!message.guild) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (message.content.includes("<@694178512843702362>")) {
        message.channel.send("heya, my prefix is `t.`");
    }

    if (cmd.length === 0) return;

    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    const db = new VultrexDB({
        provider: "sqlite",
        table: "main",
        fileName: "main"
    })

    const levelInfo = bot.db.get(`level-${message.guild.id}-${message.author.id}`, {
        level: 1,
        xp: 0,
        totalXp: 0
    });
    
    const generatedXp = Math.floor(Math.random() * 16);
    levelInfo.xp += generatedXp;
    levelInfo.totalXp += generatedXp;

    if(levelInfo.xp >= levelInfo.level * 40) {
        levelInfo.level++;
        levelInfo.xp = 0;
        message.reply(`congrats, you leveled up! you are now level ${levelInfo.level}`);
    }

    await bot.db.set(`level-${message.guild.id}-${message.author.id}`, levelInfo);  

    if (command) {
        if (command.timeout) {
            if (Timeout.has(`${message.author.id}${command.name}`)) {
                return message.reply(`You can only use this command every ${ms(command.timeout)}!`)
            }
            else {

                command.run(bot, message, args);
                Timeout.add(`${message.author.id}${command.name}`)
                setTimeout(() => {
                    Timeout.delete(`${message.author.id}${command.name}`)
                }, command.timeout);
            }
        }

        else if (Timeout.has(`${message.author.id === '296627878752419850'}${command.name}`)) {
            command.run(bot, message, args);
        }

        else {
            command.run(bot, message, args)
        }

    }
}