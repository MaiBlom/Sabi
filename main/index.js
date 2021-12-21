const { Client, Intents } = require('discord.js');
require('dotenv').config();
const client = new Client({
    intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, 'GUILDS', 'GUILD_PRESENCES', 'GUILD_MESSAGES', 'GUILD_BANS', 'GUILD_MEMBERS']
});

var commands = require('./commands/commands')


client.on('ready', () => {
  	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
    console.log(`Message received: ${msg.content}`);
	commands.kickUser(client, msg.member);
})

client.login(process.env.BOTTOKEN);