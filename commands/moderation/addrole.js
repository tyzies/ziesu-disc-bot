module.exports = {
    name: 'addrole',
    description: 'adds a role to the user',
    aliases: ["ar", "roleadd"],
    timeout: 5000,

    run: async (bot, message, args) => {
        if (!message.member.permissions.has("MANAGE_ROLES", "MANAGE_MEMBERS", "ADMINISTRATOR", "MANAGE_SERVER")) return message.channel.send("you dont have permissions.");
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.slice(1).join(" "));

        if (!args[0]) return message.channel.send('please mention a user. or provide their id.');
        if (!member) return message.channel.send('they are not in the server or they dont exist.');
        if (!role) return message.channel.send('what role do you wanna give?')

        if (message.member.roles.cache.has(role.id)) return message.channel.send('they already have the role.');

        message.member.roles.add(role);
        message.channel.send(`successfully added the role ${role} to ${member.user.tag}.`);
    }
}