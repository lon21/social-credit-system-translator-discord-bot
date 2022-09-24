import chalk from 'chalk';
import { readdirSync } from 'fs';
import bot from '../bot';

console.log(`${chalk.blue('[INFO]')} Loading events`);

readdirSync(__dirname + '/../events').forEach(async fileName => {
	const event = await import(__dirname + '/../events/' + fileName);
	
	if (!event.default.run) throw new Error(`Event "${fileName}" does not have run option!`);

	const eventName = fileName.split('.')[0];
	
	bot.events.set(eventName, event.default);

	bot.on(eventName, binds => event.default.run(binds));
});