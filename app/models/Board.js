var ColumnSchema = new mongoose.Schema({
	name: String,
	tasks: [mongoose.Schema.ObjectId]
});

var Schema = new mongoose.Schema({
	name: {
		type: String,
		trim: true
	},
	uri: { 
		type: String,
		unique: true
	},
	columns: [ColumnSchema]
});

module.exports = mongoose.model('Board', Schema);
