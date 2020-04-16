const { MessageEmbed } = require('discord.js');
const request = require('request');

module.exports = {
    name: 'corona',
    description: 'COVID-19 Information',
    timeout: 5000,
    aliases: ["coronavirus", "covid19", "viruscorona"],

    run: async (bot, message, args) => {
        const url = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22confirmed%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22deaths%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22recovered%22%7D%5D"
        request(url, function (err, response, body) {
            if (err) return msg.send("ERR")
            body = JSON.parse(body)
            infected = body['features'][0]['attributes']['confirmed']

            const url2 = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22confirmed%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22deaths%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22recovered%22%7D%5D"
            request(url2, function (err, response, body) {
                if (err) return msg.send("ERR")
                body = JSON.parse(body)
                dead = body['features'][0]['attributes']['deaths']

                const url3 = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22confirmed%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22deaths%22%7D%2C%20%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22recovered%22%7D%5D"
                request(url3, function (err, response, body) {
                    if (err) return msg.send("ERR")
                    body = JSON.parse(body)
                    recovered = body['features'][0]['attributes']['recovered']


                    let coronaEmbed = new MessageEmbed()
                        .setTitle("COVID-19 Statistics")
                        .addField("<a:lr:698779764823031819> Cases", `${infected}`, true)
                        .addField("<a:lr:698779764823031819> Deaths", `${dead}`, true)
                        .addField("<a:lr:698779764823031819> Recovered", `${recovered}`, true)
                        .addField("<a:lr:698779764823031819> Help Stop Coronavirus", `[Advice for Public](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public)`)
                        .setThumbnail("https://cdn.discordapp.com/attachments/239446877953720321/691020838379716698/unknown.png")
                        .setFooter("command credits to Satoh Sakurako#2293 / LoL Skiller on YT")
                        .setColor(0xfc0008)

                    message.channel.send(coronaEmbed);
                })
            })
        })
    }
}