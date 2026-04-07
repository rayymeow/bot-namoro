client.on('ready', async () => {
    console.log(`Logado como ${client.user.tag}`);
    console.log("ENTROU");

    const channel = client.channels.cache.get("1490517428055052401");

    console.log("Canal:", channel);

    if (!channel) {
        console.log("❌ Canal não encontrado no cache");
        return;
    }

    await channel.send("AGORA VAI FUNCIONAR");
});
