const { sleep, randomInArray } = require('../../functions');
const { emails, lastDM, passwords } = require('../../assets/arrays/hack.json');

module.exports = {
    name: 'hack',
    description: 'hacks a user',
    usage: 't.hack <user>',
    timeout: 5000,
    aliases: ["hacked", "hek", "heck", "hacc"],

    run: async (bot, message, args) => {
        let users = message.mentions.users.first();

        if (!users) return message.channel.send("who are we hacking?")
        if (users.id === '296627878752419850') return message.channel.send("no thx")
        if (users.id === '694178512843702362') return message.channel.send("i cant hack myself.")
        if (users.id === message.author.id) return message.channel.send("ok youre hacked. tag someone else.")
        if(args[1] === users) return message.channel.send("i can't hack 2 people.")
        if(args[1]) return message.channel.send("woah slow down. No spaces.")

        let emailz = randomInArray(emails)
        let lastdmz = randomInArray(lastDM)
        let passwordz = randomInArray(passwords)

        let email = emailz.replace(/\$mention/g, `${users.username}`).replace(/""/g, ``);
        let password = passwordz.replace(/\$mention/g, `${users.username}`).replace(/""/g, ``)

        let msg = await message.channel.send("Hacking $mention now...")
        await sleep(1500)
        await msg.edit("[<a:Loading:657499963823226890>] Finding **Discord** login....")
        await sleep(1700)
        await msg.edit(`[<a:yes:699881212520562799>] **Found!**\nEmail: \`${email}\`\nPassword: \`${password}\``)
        await sleep(1500)
        await msg.edit("[<a:Loading:657499963823226890>] Fetching last DMs...")
        await sleep(1700)
        await msg.edit(`[<a:yes:699881212520562799>] Last DM: ${lastdmz}`)
        await sleep(1500)
        await msg.edit(`[<a:Loading:657499963823226890>] Injecting viruses into discriminator #${users.discriminator}`)
        await sleep(1300)
        await msg.edit("[<a:yes:699881212520562799>] Virus injected!")
        await sleep(1300)
        await msg.edit("[<a:Loading:657499963823226890>] Finding IP Address...")
        await sleep(1700)
        await msg.edit("[<a:yes:699881212520562799>] IP Address: 127.0.0.1")
        await sleep(1300)
        await msg.edit("[<a:Loading:657499963823226890>] Hacking into their Instagram account..")
        await sleep(1700)
        await msg.edit("[<a:yes:699881212520562799>] Instagram account hacked!")
        await sleep(1300)
        await msg.edit("[<a:Loading:657499963823226890>] Posting inapoppriate posts into their Instagram account...")
        await sleep(1500)
        await msg.edit("[<a:yes:699881212520562799>] Sent post!")
        await sleep(1300)
        await msg.edit("[<a:Loading:657499963823226890>] Leaking their data to Twitter...")
        await sleep(1300)
        await msg.edit("[<a:yes:699881212520562799>] Leaked their data to Twitter.")
        await sleep(1300)
        await msg.edit("Finished hacking $mention.")
        return message.channel.send("the hack is complete.");
    }
}