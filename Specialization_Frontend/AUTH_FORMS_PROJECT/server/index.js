import express from 'express';
import authRouter from './routes/auth.js';
import productsRouter from './routes/products.js';
import session from 'express-session';
import './database/index.js';
import cors from 'cors';


const app = express();

const PORT = 2001;

app.use(express.json());
app.use(session({
  secret: "DKFJURNVH",
  resave: true,
  saveUninitialized: false
}));

app.use(cors({
    origin: 'http://localhost:3004', //ukazivaem spisok doverennih domenov
    credentials: true //vkluchaem podderzhku kukov
}));

app.use('/auth', authRouter);
app.use('/products', productsRouter);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));