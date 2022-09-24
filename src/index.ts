import figlet from 'figlet';
import { config } from 'dotenv'; config();
import chalk from 'chalk';
import { readdirSync } from 'fs';

(() => {
	console.clear();
	console.log(chalk.yellow(figlet.textSync('lon21', { font: '3D-ASCII' })));
	console.log(`${chalk.blue('[INFO]')} Starting bot`);
	readdirSync(__dirname + '/handlers').forEach(async fileName => {
		if (!fileName.includes('.handler.') || fileName.startsWith('--')) return;
		await import(__dirname + '/handlers/' + fileName);
	});
})();
