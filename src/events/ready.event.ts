import chalk from 'chalk';
import figlet from 'figlet';
import bot from '../bot';
import BotEvent from '../types/BotEvent';


export default <BotEvent> {
	run: () => {
		console.clear();
		bot.user.setActivity('Google Translator');
		bot.user.setStatus('dnd');
		console.log(chalk.yellow(figlet.textSync('lon21', { font: '3D-ASCII' })));
		console.log(`${chalk.blue('[INFO]')} Loaded ${chalk.red(bot.events.size)} events`);
		console.log(`${chalk.blue('[INFO]')} Loaded ${chalk.red(bot.commands.size)} commands and ${chalk.red(bot.aliases.size)} aliases\n`);
		console.log(`${chalk.green('[READY]')} Logged in as ${bot.user.tag}`);
	}
}