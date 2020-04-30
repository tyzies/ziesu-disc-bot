module.exports = {
    name: 'clap',
    description: 'clap them words bois',
    aliases: ["klep", "clapify"],
    timeout: 3000,

    run: async (bot, message, args) =>{
        let yeet = args;
        if(!args[0]) return message.channel.send("what do you want me to clap?")

        if(yeet.length === 1){
            return message.channel.send(args[0].split('').join(' 👏 '))
        } else {
            return message.channel.send(yeet.join(' 👏 '))
        }
    }
}