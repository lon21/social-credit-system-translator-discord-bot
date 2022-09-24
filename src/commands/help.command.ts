import { EmbedBuilder } from 'discord.js';
import BotCommand from '../types/BotCommand';
import bot from '../bot';

export default <BotCommand>{
	name: 'help',
	aliases: ['pomoc'],
	desc: 'Komenda, która pokazuje komendy',
	run: async ({ msg }) => {
		const embed = new EmbedBuilder()
			.setColor('Green')
			.setAuthor({ name: 'Pomoc', iconURL: msg.guild.iconURL({ extension: 'webp' }) || bot.user.avatarURL({ extension: 'webp' })})
			.setFooter({ text: `Wykonano dla ${msg.author.username}`, iconURL: msg.author.avatarURL({ extension: 'webp' })});

			await bot.commands.forEach(async command => {
				if (command.ownerOnly && !bot.config.owners.includes(msg.author.id)) return;

				await embed.addFields({ name: `**\`${bot.config.prefix}${command.name}\`** \`(${command?.aliases?.join(', ') ?? 'Brak aliasów'})\``, value: `${command.desc}` });
			});

		msg.reply({ embeds: [embed] });
	},
}