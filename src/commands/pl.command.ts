import BotCommand from '../types/BotCommand';
import translate from 'google-translate-api-x';

export default <BotCommand> {
	name: 'pl',
	aliases: ['pol', 'polnese'],
	desc: 'Przetłumacz cokolwiek na polski',
	category: 'translation',
	run: async ({ msg, args }) => {
		if (!args) return msg.reply('Proszę pana, nie mogę przetłumaczyć czegoś czego nie ma!');
		const message = await msg.reply('Proszę mi dać sekundę, już tłumaczę!');
		const trans: any = await translate(args.join(' '), { to: 'pl' });
		message.edit(`Pana tłumaczenie to:\n\`${trans.text}\``);
	},
}