import mongoose from 'mongoose';

export interface UserType {
  _id: mongoose.Types.ObjectId,
  name: string,
  username: string,
  image: string,
  upvotes: string[],
}

const images = [
  './assets/user-images/image-anne.jpg',
  './assets/user-images/image-elijah.jpg',
  './assets/user-images/image-george.jpg',
  './assets/user-images/image-jackson.jpg',
  './assets/user-images/image-james.jpg',
  './assets/user-images/image-javier.jpg',
  './assets/user-images/image-judah.jpg',
  './assets/user-images/image-roxanne.jpg',
  './assets/user-images/image-ryan.jpg',
  './assets/user-images/image-suzanne.jpg',
  './assets/user-images/image-thomas.jpg',
  './assets/user-images/image-victoria.jpg',
  './assets/user-images/image-zena.jpg',
];

const userSchema = new mongoose.Schema<UserType>({
  name: {
    type: String,
    required: [true, 'user requires a name'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'user requires a username'],
  },
  image: {
    type: String,
    default: function() { 
        return images[Math.floor(Math.random() * images.length)];
    }
  },
  upvotes: [
    {
      type: String,
    }
  ],
});

export default mongoose.model('User', userSchema);