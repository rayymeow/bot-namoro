const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const START_DATE = new Date("2026-01-01T00:02:00");

// 👉 COLOCA AQUI
const CHANNEL_ID = '1490517428055052401';
const MESSAGE_ID = '1490523365981687808'; // 👈 mantém como STRING

client.once('clientReady', async () => {
    console.log(`Logado como ${client.user.tag}`);

    const channel = await client.channels.fetch(CHANNEL_ID);

    let message;

    try {
        // tenta pegar a mensagem existente
        message = await channel.messages.fetch(MESSAGE_ID);
    } catch {
        // se não existir, cria uma nova
        message = await channel.send("Carregando contagem . . .");
        console.log("Novo ID da mensagem:", message.id);
    }

    setInterval(async () => {
        const now = new Date();
        const diff = now - START_DATE;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;

        const embed = new EmbedBuilder()
            .setTitle("_ _ 　　𝄞　 ࣭　　**F**ragmentos que nos tornam ainda melhores.゛　　◌𓈒 <:ringw:1487594612217614518>")
            .setDescription(`\n<:catheart:1462162063722811424> ${days} dias\n<:cards:1462162167666311312> ${hours} horas\n<:dices:1462162235425030277> ${minutes} minutos`)
            .setColor(0xff69b4)
            .setFooter({ text: "Desde 01/01/2026 às 00:02 <:ringw:1487594612217614518>" })
            .setTimestamp();

        await message.edit({ embeds: [embed] });

    }, 60000);
});

console.log(process.env.TOKEN);
client.login(process.env.TOKEN);
