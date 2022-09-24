import { Client, ClientOptions, GatewayIntentBits,Collection } from 'discord.js';
import config from './config';
import BotEvent from './types/BotEvent';
import BotCommand from './types/BotCommand';

class Bot extends Client {

	aliases: Collection<string, BotCommand>;
	commands: Collection<string, BotCommand>;
	events: Collection<string, BotEvent>;
	
	config: typeof config;

	constructor(clientOptions: ClientOptions) {
		super(clientOptions);

		this.commands = new Collection();
		this.aliases = new Collection();
		this.events = new Collection();

		this.config = config;

		this.login(process.env.BOT_TOKEN);
	}
}

const bot = new Bot({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions] });
global.bot = bot;
export default bot;