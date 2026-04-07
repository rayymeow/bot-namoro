const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const token = process.env.TOKEN;

console.log("TOKEN RAW:", token);
console.log("TIPO:", typeof token);
console.log("TAMANHO:", token ? token.length : "undefined");

client.once('clientReady', () => {
    console.log('FUNCIONOU');
});

client.login(token);
