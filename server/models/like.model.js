var LikeSchema = new mongoose.Schema({
  user: {
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }
}, {timestamps: true});

mongoose.model('Like', LikeSchema);
