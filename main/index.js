const { Client, Intents } = require('discord.js');
//require('dotenv').config();
const { BOTTOKEN } = require('../config.json');
const client = new Client({
    intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
    console.log(`Message received: ${msg.content}`);
})

client.login(BOTTOKEN);