import chalk from 'chalk';
import { readdirSync } from 'fs';
import bot from '../bot';

console.log(`${chalk.blue('[INFO]')} Loading commands`);

readdirSync(__dirname + '/../commands').forEach(async fileName => {
	const command = await import(__dirname + '/../commands/' + fileName);

	if (!command.default.run || !command.default.desc || !command.default.run) throw new Error(`Something is misssing in command "${fileName}"`);

	bot.commands.set(command.default.name, command.default);
	if (Array.isArray(command.default.aliases)) {
		command.default?.aliases.forEach(alias => {
			bot.aliases.set(alias, command.default);
		});
	}
});