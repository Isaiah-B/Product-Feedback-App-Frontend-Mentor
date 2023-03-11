import mongoose from 'mongoose';

export interface FeedbackType {
  title: string,
  description?: string,
  upvotes: number,
  category: 'enhancement' | 'feature' | 'bug',
  status: 'suggestion' | 'planned' | 'in-progress' | 'live',
  comments: mongoose.Types.ObjectId[],
  user?: mongoose.Types.ObjectId,
}

const feedbackSchema = new mongoose.Schema<FeedbackType>({
  title: {
    type: String,
    required: [true, 'feedback requires a title'],
  },
  description: {
    type: String,
    default: '',
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ['enhancement', 'feature', 'bug'],
    default: 'feature',
  },
  status: {
    type: String,
    enum: ['suggestion', 'planned', 'in-progress', 'live'],
    default: 'suggestion',
  },
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

feedbackSchema.pre(/^find/, function(next) {
  this.populate(['comments']);
  next();
});

export default mongoose.model('Feedback', feedbackSchema);