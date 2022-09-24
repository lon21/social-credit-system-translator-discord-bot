import { Message } from 'discord.js';
import bot from '../bot';
import BotCommand from '../types/BotCommand';
import BotEvent from '../types/BotEvent';
import translate from 'google-translate-api-x';

export default <BotEvent> {	
	run: async (message: Message) => {
		const prefix = bot.config.prefix;

		if (message.author.id === '899225748819308585') {
			const msg = message;
			const res: any = await translate(msg.content, { to: 'pl'});
			msg.reply(`Szanowny Pan napisał:\n\`${res.text}\``);
		}

		if (message.author.bot || !message.content.startsWith(prefix)) return;

		const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
		const cmd = args.shift().toLowerCase();

		const command = <BotCommand> bot.commands.get(cmd) || bot.aliases.get(cmd) || null;
		if (!command) return;
		if (command.ownerOnly && !bot.config.owners.includes(message.author.id)) return message.react('❌');
		
		await command.run({ msg: message, args });
	},
}