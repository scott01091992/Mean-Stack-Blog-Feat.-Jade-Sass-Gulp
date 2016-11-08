var UserSchema = new mongoose.Schema({

	name: {
		type: String,
		required: [true, 'Please provide your name']
	},
	email: {
		type: String,
		required: [true, 'Please provide an email address'],
		validate: {
			validator: function(v){
				return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(v);
			},
			message: 'Not a valid email address'
		}
	},
  password: {
    type: String,
    required: [true, 'Please provide a password']
  },
  comments: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
  },
  likes: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Like'}]
  }
}, {timestamps: true});

mongoose.model('User', UserSchema);
