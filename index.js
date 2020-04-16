const Discord = require("discord.js");
const fs = require("fs");
const config = require('./config.json')
const prefix = config.prefix;
const bot = new Discord.Client({ disableMentions: 'everyone' })

bot.prefix = prefix;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Map();
bot.categories = fs.readdirSync("./commands/");
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});
const token = require(`./token.json`)
bot.login(token.token);
