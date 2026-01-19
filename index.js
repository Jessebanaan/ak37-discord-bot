const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] 
});

client.on('ready', () => {
    console.log(`✅ AK-37 Bot online as ${client.user.tag}!`);
});

// Simpele commands
client.on('messageCreate', message => {
    if (message.content === '!ak37') {
        message.channel.send('🏎️ **AK-37** - Le Mans Ultimate simrace team! 🏁\nJoin: https://discord.gg/3ZcKGbZqjk');
    }

    if (message.content === '!races') {
        message.channel.send('📅 **Upcoming Races:**\n• Le Mans Ultimate Special Event \n• Spa 4H');
    }
});

client.login(process.env.DISCORD_TOKEN);
