import BotCommand from '../types/BotCommand';
import { EmbedBuilder } from 'discord.js';
import { inspect } from 'util';

export default <BotCommand>{
	name: 'eval',
	desc: 'Wykonaj kod',
	ownerOnly: true,
	category: 'dev',
	run: async ({ msg, args }) => {
		try {
			const toEval = args.join(' ');

			const evaled = await eval(toEval);

			const embed = new EmbedBuilder()
				.setColor('Green')
				.setAuthor({ name: 'Eval', iconURL: msg.guild.iconURL({ extension: 'webp' }) || msg.author.avatarURL({ extension: 'webp' }) })
				.setDescription(`Kod:\n\`\`\`js\n${toEval}\`\`\`\nTyp:\n\`\`\`js\n${typeof evaled}\`\`\`\nStatus:\n\`\`\`js\n${await inspect(evaled)}\`\`\``);
			msg.reply({ embeds: [embed] });
		}
		catch (e) {
			msg.reply(`nie umiesz ts:\n\`\`\`${e.message}\`\`\``);
		}
	},
}