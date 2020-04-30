const { sleep, randomInArray } = require('../../functions');

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
        if(args[1]) return message.channel.send("woah slow down. No spaces.")

        let emails = [
            "mymomisgay@gmail.com",
            `${users.username}ispro@yahoo.com`,
            `${users.username}cool1234@email.com`,
            "ilovediscord@gmail.com",
            `real${users.username}@gmail.com`
        ]

        let lastDM = [
            "please don't kill me",
            "hey why dont you check out pornhub?",
            "yeah i agree i am gay",
            "your mom fat",
            "imagine having a big peepee like me lol",
            "yo your boobs r sexy",
            "please dont check my hentai file"
        ]

        let passwords = [
            `${users.username}1234pro`,
            `ILoveDiscord402`,
            `animelover69`,
            `minecraftcool044`,
            `sanslol43`
        ]

        let email = randomInArray(email)
        let lastdm = randomInArray(lastDM)
        let password = randomInArray(passwords)

        let msg = await message.channel.send(`Hacking ${users.username} now...`)
        await sleep(1500)
        await msg.edit("[<a:Loading:657499963823226890>] Finding **Discord** login....")
        await sleep(1700)
        await msg.edit(`[<a:yes:699881212520562799>] **Found!**\nEmail: \`${email}\`\nPassword: \`${password}\``)
        await sleep(1500)
        await msg.edit("[<a:Loading:657499963823226890>] Fetching last DMs...")
        await sleep(1700)
        await msg.edit(`[<a:yes:699881212520562799>] Last DM: ${lastdm}`)
        await sleep(1500)
        await msg.edit(`[<a:Loading:657499963823226890>] Injecting viruses into discriminator #${users.discriminator}`)
        await sleep(1300)
        await msg.edit("[<a:yes:699881212520562799>] Virus injected!")
        await sleep(1300)
        await msg.edit(`[<a:Loading:657499963823226890>] Finding IP Address...`)
        await sleep(1700)
        await msg.edit(`[<a:yes:699881212520562799>] IP Address: 127.0.0.1`)
        await sleep(1300)
        await msg.edit(`[<a:Loading:657499963823226890>] Hacking into their Instagram account..`)
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
        await msg.edit(`Finished hacking ${users.username}.`)
        return message.channel.send("the hack is complete.");
    }
}