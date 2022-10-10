import { EmbedBuilder } from 'discord.js';
import BotCommand from '../types/BotCommand';
import bot from '../bot';

export default <BotCommand>{
	name: 'help',
	aliases: ['pomoc'],
	desc: 'Komenda, która pokazuje komendy',
	category: 'info',
	run: ({ msg }) => {
		const embed = new EmbedBuilder()
			.setColor('Green')
			.setAuthor({ name: 'Pomoc', iconURL: msg.guild.iconURL({ extension: 'webp' }) || bot.user.avatarURL({ extension: 'webp' }) })
			.setFooter({ text: `Wykonano dla ${msg.author.username}`, iconURL: msg.author.avatarURL({ extension: 'webp' }) });

		const commands = {};
		bot.commands.forEach(command => {
			if (command.ownerOnly && !bot.config.owners.includes(msg.author.id)) return;
			if (!commands[command.category]) commands[command.category] = {};
			commands[command.category][command.name] = command;
		});

		let embedDesc = '';

		Object.keys(commands).forEach(category => {
			embedDesc += `**${category}:**\n`;

			let embedCommands = '';
			Object.entries(commands[category]).forEach(([name, command]: any) => {
				embedCommands += ` - **\`${bot.config.prefix}${name}\`** \`(${command?.aliases?.join(', ') ?? 'Brak'})\` - ${command.desc}\n`;
			});
			embedDesc += embedCommands + '\n';
		});

		embed.setDescription(embedDesc);
		msg.reply({ embeds: [embed] });
	},
}