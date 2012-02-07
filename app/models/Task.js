var ItemSchema = new mongoose.Schema({
	name: String,
	start: Date,
	end: Date
});

var Schema = new mongoose.Schema({
	description: {
		type: String
	},
	started: Date,
	items: [ItemSchema],
	responsible: String
});


module.exports = mongoose.model('Task', Schema);
