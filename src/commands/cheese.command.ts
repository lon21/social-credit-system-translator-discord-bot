import BotCommand from '../types/BotCommand';

export default <BotCommand> {
	name: 'cheese',
	desc: 'Przetłumacz cokolwiek na ser',
	aliases: ['ser'],
	category: 'translation',
	run: async ({ msg, args }) => {
		if (!args) return msg.reply('Proszę pana, nie mogę przetłumaczyć czegoś czego nie ma!');
		const message = await msg.reply('Proszę mi dać sekundę, już tłumaczę!');
		const trans = [];
		const chars = ['ser', 'cheese', '🧀', 'CHEESE', 'SER', 'CHEese'];
		args.forEach(() => {
			const char = chars[Math.floor(Math.random() * chars.length)];
			trans.push(char);
		});
		message.edit(`Pana tłumaczenie to:\n${trans.join(' ')}`);
	},
}