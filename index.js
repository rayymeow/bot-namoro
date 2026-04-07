client.once('ready', async () => {
    console.log(`Logado como ${client.user.tag}`);

    const channel = await client.channels.fetch("1490517428055052401");

    console.log("Canal encontrado:", channel?.id);

    if (!channel) {
        console.log("❌ Canal não encontrado");
        return;
    }

    await channel.send("TESTE DIRETO FUNCIONANDO");
});
