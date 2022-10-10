import { Message } from 'discord.js';

interface BotCommandRunArguments {
	msg: Message;
	args: string[];
}

export default interface BotCommand {
	name: string;
	aliases?: string[];
	desc: string;
	ownerOnly?: boolean;
	category: 'translation' | 'dev' | 'info';
	run: (BotCommandRunArguments: BotCommandRunArguments) => Promise<any>;
}