const { Client, Intents } = require('discord.js');
require('dotenv').config();

// List of Intents: https://discord.com/developers/docs/topics/gateway#list-of-intents
const client = new Client({
    intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS ]
});

var commands = require('./commands/commands')


client.on('ready', () => {
  	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
    console.log(`Message received: ${msg.content}`);
})

client.login(process.env.BOTTOKEN);