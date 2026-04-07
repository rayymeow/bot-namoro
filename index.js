const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ] 
});

const START_DATE = new Date("2026-01-01T00:02:00");

// 👉 CANAL
const CHANNEL_ID = '1490517428055052401';

client.on('clientReady', async () => {
    console.log(`Logado como ${client.user.tag}`);

    const channel = await client.channels.fetch(CHANNEL_ID).catch(console.error);

    console.log("Canal:", channel?.id);

    if (!channel) {
        console.log("❌ Canal não encontrado");
        return;
    }

    let message;

    try {
        // pega últimas mensagens do bot
        const messages = await channel.messages.fetch({ limit: 10 });
        message = messages.find(m => m.author.id === client.user.id);
    } catch {
        console.log("Erro ao buscar mensagens");
    }

    if (!message) {
        message = await channel.send("Carregando contagem . . .");
        console.log("Nova mensagem criada:", message.id);
    }

    const update = async () => {
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
    };

    // roda na hora
    await update();

    // atualiza a cada 1 minuto (pode deixar 5000 pra teste)
    setInterval(update, 60000);
});

console.log("TOKEN carregado?", !!process.env.TOKEN);

// 👇 login
client.login(process.env.TOKEN?.trim());
