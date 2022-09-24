import bot from '../bot';
import BotCommand from '../types/BotCommand';

export default <BotCommand> {
	name: 'ping',
	desc: 'f',
	ownerOnly: true,
	run: ({ msg }) => {
		msg.reply(`Pong, mój ping to \`${bot.ws.ping}ms\``);
	},
}