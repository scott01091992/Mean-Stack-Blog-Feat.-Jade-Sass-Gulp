var ReviewSchema = new mongoose.Schema({

	title: {
		type: String,
		required: [true, 'Title field cannot be empty']
	},
  description: {
    type: String,
    required: [true, 'Must provide a description']
  },
  media:{
    type: String,
    required: [true, 'Need a video url, or a image url']
  }
}, {timestamps: true});

mongoose.model('Review', ReviewSchema);
