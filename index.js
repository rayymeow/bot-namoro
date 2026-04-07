client.on('ready', async () => {
    console.log(`Logado como ${client.user.tag}`);
    console.log("ENTROU NO READY");

    const channel = await client.channels.fetch("1490517428055052401");

    console.log("Canal:", channel?.id);

    await channel.send("AGORA VAI FUNCIONAR");
});
