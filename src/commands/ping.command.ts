import bot from '../bot';
import BotCommand from '../types/BotCommand';

export default <BotCommand> {
	name: 'ping',
	desc: 'Sprawdź opóźnienie bota',
	category: 'dev',
	ownerOnly: true,
	run: ({ msg }) => {
		msg.reply(`Pong, mój ping to \`${bot.ws.ping}ms\``);
	},
}