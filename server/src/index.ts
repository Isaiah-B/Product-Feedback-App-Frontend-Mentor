import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './app';

dotenv.config();

const DB_URI = process.env.MONGODB_URI || '';
const PORT = process.env.PORT || 8000;

mongoose.connect(DB_URI, () => console.log('Connected to database'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));