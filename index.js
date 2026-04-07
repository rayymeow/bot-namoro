const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

console.log("🔥 NOVA VERSÃO 🔥");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

const START_DATE = new Date("2026-01-01T00:02:00");

const CHANNEL_ID = "1490517428055052401";

client.on('ready', async () => {
    console.log(`Logado como ${client.user.tag}`);
    console.log("ENTROU NO READY 🔥");

    let channel;

    try {
        channel = await client.channels.fetch(CHANNEL_ID);
        console.log("Canal encontrado:", channel.id);
    } catch (err) {
        console.error("Erro ao buscar canal:", err);
        return;
    }

    let message;

    // tenta pegar mensagem existente (opcional)
    try {
        const messages = await channel.messages.fetch({ limit: 10 });
        message = messages.first();
    } catch {
        console.log("Não conseguiu pegar mensagens antigas");
    }

    if (!message) {
        message = await channel.send("Carregando contagem...");
        console.log("Nova mensagem criada:", message.id);
    }

    // função de atualização
    const update = async () => {
        const now = new Date();
        const diff = now - START_DATE;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;

        const embed = new EmbedBuilder()
            .setTitle("💖 Nosso tempo juntos 💖")
            .setDescription(
                `💕 ${days} dias\n⏱️ ${hours} horas\n🕒 ${minutes} minutos`
            )
            .setColor(0xff69b4)
            .setFooter({ text: "Desde 01/01/2026 às 00:02" })
            .setTimestamp();

        await message.edit({ embeds: [embed] });
    };

    // roda imediatamente
    await update();

    // atualiza a cada 1 minuto
    setInterval(update, 60000);
});

client.login(process.env.TOKEN?.trim());
