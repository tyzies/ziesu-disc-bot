const { MessageEmbed } = require('discord.js');
const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();

module.exports = {
    name: 'corona',
    description: 'COVID-19 Information',
    timeout: 5000,
    aliases: ["coronavirus", "covid19", "viruscorona"],

    run: async (bot, message, args) => {

        if(!args.length || args.join(" ") === "all"){
            let corona = await track.all()

            let embed = new MessageEmbed()
            .setTitle("COVID19 Statistics")
            .setDescription("**Global**")
            .setColor(0xff0505)
            .setThumbnail("https://cdn.discordapp.com/attachments/239446877953720321/691020838379716698/unknown.png")
            .addField('<a:lr:698779764823031819> **Total Cases**', corona.cases, true)
            .addField("<a:lr:698779764823031819> **Total Deaths**", corona.deaths, true)
            .addField("<a:lr:698779764823031819> **Total Recovered**", corona.recovered, true)
            .addField("<a:lr:698779764823031819> **Today's Cases**", corona.todayCases, true)
            .addField("<a:lr:698779764823031819> **Today's Deaths**", corona.todayDeaths, true)
            .addField("<a:lr:698779764823031819> **Active Cases**", corona.active, true)
            .addField("<:plz:641214498191048706> **Help Stop COVID-19!**", `[Preventing COVID-19](https://who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public)`, true)
            
           return message.channel.send(embed);
        } else {
            let corona = await track.countries(args.join(" "))
            if(!corona.country) return message.channel.send("write the full name/country doesn't exist.")

            let embed = new MessageEmbed()
            .setTitle(`COVID19 Statistics`)
            .setDescription(`${corona.country}`)
            .setColor(0xff0505)
            .setThumbnail("https://cdn.discordapp.com/attachments/239446877953720321/691020838379716698/unknown.png")
            .addField('<a:lr:698779764823031819> **Total Cases**', corona.cases, true)
            .addField("<a:lr:698779764823031819> **Total Deaths**", corona.deaths, true)
            .addField("<a:lr:698779764823031819> **Total Recovered**", corona.recovered, true)
            .addField("<a:lr:698779764823031819> **Today's Cases**", corona.todayCases, true)
            .addField("<a:lr:698779764823031819> **Today's Deaths**", corona.todayDeaths, true)
            .addField("<a:lr:698779764823031819> **Active Cases**", corona.active, true)
            .addField("<a:alert:699909766562054214> **Help Stop COVID-19!**", `[Preventing COVID-19](https://who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public)`, true)

            return message.channel.send(embed);
        }
    }
}
