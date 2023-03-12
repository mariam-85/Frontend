import mongoose from 'mongoose';
import { user_data } from './password';

mongoose.connect(`mongodb+srv://${user_data}@cluster0.vsoymey.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));