import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { InteractionHelper } from '../../utils/interactionHelper.js';

export default {
    data: new SlashCommandBuilder()
        .setName('prices')
        .setDescription('Shows Vanta price list'),

    category: 'Utility',

    async execute(interaction) {

        await InteractionHelper.safeDefer(interaction);

        const embed = new EmbedBuilder()
            .setColor('#8A2BE2')
            .setTitle('💜 Vanta Prices')
            .setThumbnail('https://media.discordapp.net/attachments/1530619281249927399/1530628645843111936/Jul_25_2026_11_31_31_AM.png?ex=6a664482&is=6a64f302&hm=1c2dbb75264ad935c6c1d8bea4790dccea3aae9f2a366bd039efa13c4e41fe16&=&format=webp&quality=lossless&width=987&height=395')
            .setDescription(`
# 🏆 Rank Boosting

🥈 **Silver** (600-1200) — **$3 / 200 ELO**
🥇 **Gold** (1200-1800) — **$5 / 200 ELO**
💠 **Platinum** (1800-2400) — **$7 / 200 ELO**
💎 **Diamond** (2400-3000) — **$11 / 200 ELO**
🟣 **Onyx** (3000-3600) — **$13 / 200 ELO**
👑 **Nemesis** (3600-3800) — **$15 / 200 ELO**

## 👥 Duo Queue (+15%)

Queue with your booster on your own account. This lets us find matches faster while you stay in control of your account.

## 🎥 Stream Boost (+35%)

Watch your boost live from start to finish through a private stream.

━━━━━━━━━━━━━━━━━━━━━━

# 🔥 Winstreak Boosting

🔥 **100 Winstreak** — **$15**
🔥 **200 Winstreak** — **$30**
🔥 **300 Winstreak** — **$45**
🔥 **400 Winstreak** — **$60**
🔥 **500 Winstreak** — **$75**
🔥 **500+ Winstreak** — **Open a Ticket**

## ⚠️ Method

You will be teamed up with experienced players to complete your winstreak as quickly and consistently as possible.

━━━━━━━━━━━━━━━━━━━━━━

💜 **Need something custom?**  
Open a ticket and we'll provide a personalized quote.

*Delivery time will be estimated inside your ticket.*
            `)
            .setFooter({
                text: '💜 Vanta • Premium Services'
            });

        await InteractionHelper.safeEditReply(interaction, {
            embeds: [embed]
        });

    }
};
