module.exports = {
	name: 'off',
	description: 'ShutDown The Bot (Only MH11).',
	execute(message) {
		if (message.author.id !== 'CHANGE_THIS') return;
		message.channel.send('Turned Off!').then(() => {
			process.exit(1);
		});
	},
};