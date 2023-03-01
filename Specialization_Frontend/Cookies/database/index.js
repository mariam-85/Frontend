import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://mariam_l:WalMarAleMi31291822@cluster0.vsoymey.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));