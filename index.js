const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

// Cria o bot
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// :two_hearts: DATA DE INÍCIO (de vocês)
const START_DATE = new Date("2026-01-01T00:02:00");

// Quando o bot ligar
client.once('ready', async () => {
    console.log(`Logado como ${client.user.tag}`);

    // :round_pushpin: COLOQUE O ID DO CANAL AQUI
    const channel = await client.channels.fetch('1490517428055052401');

    // Envia mensagem inicial
    let message = await channel.send("Carregando contagem . . .");

    // Atualiza a cada 1 minuto
    setInterval(async () => {
        const now = new Date();
        const diff = now - START_DATE;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;

        const embed = new EmbedBuilder()
            .setTitle(":calendar_spiral: Um pedaço de tudo o que passamos juntos . . .")
            .setDescription(`Juntos há:\n\n💖 ${days} dias\n⏰ ${hours} horas\n🕐 ${minutes} minutos`)
            .setColor(0xff69b4)
            .setFooter({ text: "Desde 01/01/2026 às 00:02 :white_heart:" })
            .setTimestamp();

        await message.edit({ embeds: [embed] });

    }, 60000);
});

// :key: COLOQUE SEU TOKEN AQUI
client.login('MTQ5MDUxNTM1MjIzNTI3ODUyNg.GCVG2B.ZSmMxlyyg8eD_eESrOqWO9PZuv6OQWhaOTtmto');