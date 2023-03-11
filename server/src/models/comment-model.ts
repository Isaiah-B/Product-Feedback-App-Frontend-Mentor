import mongoose from 'mongoose';

export interface CommentType {
  content: string,
  replyingTo?: string,
  replies: mongoose.Types.ObjectId[],
  user: mongoose.Types.ObjectId;
}

const commentSchema = new mongoose.Schema<CommentType>({
  content: {
    type: String,
    maxlength: 250,
    required: [true, 'comment cannot be empty'],
  },
  replyingTo: {
    type: String,
    required: false,
  },
  replies: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  user: {
      name: String,
      username: String,
      image: String,
    }
});

// Recursively populate replies
commentSchema.pre(/^find/, function(next) {
  this.populate(['replies']);
  next();
});

export default mongoose.model('Comment', commentSchema);
