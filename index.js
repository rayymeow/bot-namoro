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

    let message;

    if (1490523365981687808) {
        message = await channel.messages.fetch(1490523365981687808);
    } else {
    // Envia mensagem inicial
        message = await channel.send("Carregando contagem . . .");
            console.log("ID da mensagem:", 1490523365981687808);
    }

    // Atualiza a cada 1 minuto
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

// :key: COLOQUE SEU TOKEN AQUI
client.login(process.env.TOKEN);
