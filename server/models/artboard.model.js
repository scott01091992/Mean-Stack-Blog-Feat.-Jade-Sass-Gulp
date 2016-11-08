var ArtboardSchema = new mongoose.Schema({

	title: {
		type: String,
		required: [true, 'Title field cannot be empty']
	},
  description: {
    type: String,
		required: [true, 'Must provide a description']
  },
	catagories: {
		type: [String],
		required: [true, 'Provide a list of catagories']
	},
	comments: {
	  type: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}
	}
}, {timestamps: true});

mongoose.model('Artboard', ArtboardSchema);
