var CommentSchema = new mongoose.Schema({

	comment: {
		type: String,
		required: [true, 'Comment field cannot be empty']
	},
  user: {
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);
