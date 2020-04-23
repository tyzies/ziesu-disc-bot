module.exports = {
    name: 'hack',
    description: 'hacks a user',
    usage: 't.hack <user>',
    timeout: 5000,
    aliases: ["hacked", "hek", "heck", "hacc"],

    run: async (bot, message, args) => {
        let users = message.mentions.users.first();

        if (!users) return message.channel.send("who are we hacking?")

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
            "yo your boobs r sexy"
        ]

        let passwords = [
            `${users.username}1234pro`,
            `ILoveDiscord402`,
            `animelover69`,
            `minecraftcool044`,
            `sanslol43`
        ]

        let email = Math.floor(Math.random() * emails.length);
        let lastdm = Math.floor(Math.random() * lastDM.length);
        let password = Math.floor(Math.random() * passwords.length)

        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        }

        let msg = await message.channel.send(`Hacking ${users.username} now...`)
        await sleep(1500)
        await msg.edit("Finding **Discord** login....")
        await sleep(1700)
        await msg.edit(`**Found!**\nEmail: \`${email}\`\nPassword: \`${password}\``)
        await sleep(1500)
        await msg.edit("Fetching last DMs...")
        await sleep(1700)
        await msg.edit(`Last DM: ${lastdm}`)
        await sleep(1500)
        await msg.edit(`Injecting viruses into discriminator #${users.discriminator}`)
        await sleep(1300)
        await msg.edit("Virus injected!")
        await sleep(1300)
        await msg.edit(`Finding IP Address...`)
        await sleep(1700)
        await msg.edit(`IP Address: 127.0.0.1`)
        await sleep(1300)
        await msg.edit(`Hacking into their Instagram account..`)
        await sleep(1700)
        await msg.edit("Instagram account hacked!")
        await sleep(1300)
        await msg.edit("Posting inapoppriate posts into their Instagram account...")
        await sleep(1500)
        await msg.edit("Sent post!")
        await sleep(1300)
        await msg.edit("Leaking their data to Twitter...")
        await sleep(1300)
        await msg.edit(`Finished hacking ${users.username}.`)
        return message.channel.send("the hack is complete.");
    }
}