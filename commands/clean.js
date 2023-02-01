module.exports = {
	name: 'clean',
	description: 'Clean up to 99 messages (Only MH11).',
	execute(message, args) {
		if (message.author.id !== 'CHANGE_THIS') return;
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to clean messages in this channel!');
		});
	},
};
