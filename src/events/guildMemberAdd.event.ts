import { GuildMember } from 'discord.js';
import BotEvent from '../types/BotEvent';

export default <BotEvent>{
    run: async (member: GuildMember) => {
        const welcomeChannel: any = await member.guild.channels.cache.get(
            '1021049975024648302'
        );
        welcomeChannel.send(
            `Witaj <@!${member.id}>\nNie podpadnij XI Jinpingowi`
        );
    },
};

