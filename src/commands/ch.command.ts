import BotCommand from '../types/BotCommand';
import translate from 'google-translate-api-x';

export default <BotCommand> {
	name: 'ch',
	desc: 'Przetłumacz cokolwiek na chinski',
	aliases: ['chiński', 'chinese'],
	category: 'translation',
	run: async ({ msg, args }) => {
		if (!args) return msg.reply('Proszę pana, nie mogę przetłumaczyć czegoś czego nie ma!');
		const message = await msg.reply('Proszę mi dać sekundę, już tłumaczę!');
		const trans: any = await translate(args.join(' '), { to: 'zh-CN' });
		message.edit(`Pana tłumaczenie to:\n\`${trans.text}\``);
	},
}