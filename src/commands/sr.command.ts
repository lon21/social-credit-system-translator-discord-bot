import BotCommand from '../types/BotCommand';
import translate from 'google-translate-api-x';

export default <BotCommand> {
	name: 'rs',
	desc: 'Przetłumacz cokolwiek na serbski',
	aliases: ['serbski'],
	category: 'translation',
	run: async ({ msg, args }) => {
		if (!args) return msg.reply('Proszę pana, nie mogę przetłumaczyć czegoś czego nie ma!');
		const message = await msg.reply('Proszę mi dać sekundę, już tłumaczę!');
		const trans: any = await translate(args.join(' '), { to: 'sr' });
		message.edit(`Pana tłumaczenie to:\n\`${trans.text}\``);
	},
}