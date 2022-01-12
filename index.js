const Discord = require('discord.js');
const config = require("./json/config.json")
const db = require("quick.db")
let prefix = (config.prefix);
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

Client.on("ready", () => {
    console.log('bot pret')
});

client.login(config.token)