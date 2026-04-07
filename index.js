client.once('clientReady', async () => {
    console.log(`Logado como ${client.user.tag}`);

    const guild = client.guilds.cache.first();

    console.log("Servidor:", guild?.name);

    const channel = guild.channels.cache.find(c => c.name === "૮🤍୧﹒𝓒ontagem﹐🗓️ՙִՙ"); // 👈 MUDA AQUI

    console.log("Canal encontrado:", channel?.name);

    if (!channel) {
        console.log("❌ Canal não encontrado");
        return;
    }

    await channel.send("TESTE DIRETO FUNCIONANDO");
});
