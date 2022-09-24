export default interface BotEvent {
	block?: boolean;
	run: (options?: object) => Promise<any>;
}