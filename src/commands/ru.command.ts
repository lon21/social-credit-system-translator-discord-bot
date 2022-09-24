import BotCommand from '../types/BotCommand';
import translate from 'google-translate-api-x';

export default <BotCommand> {
	name: 'ru',
	desc: 'Przetłumacz cokolwiek na ruskie',
	aliases: ['ruskie', 'ruski'],
	run: async ({ msg, args }) => {
		if (!args) return msg.reply('Proszę pana, nie mogę przetłumaczyć czegoś czego nie ma!');
		const message = await msg.reply('Proszę mi dać sekundę, już tłumaczę!');
		const trans: any = await translate(args.join(' '), { to: 'ru' });
		message.edit(`Pana tłumaczenie to:\n\`${trans.text}\``);
	},
}