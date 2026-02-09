import express from 'express';
import cors from 'cors';

const app = express();

const products = [
    { id: 1, name: 'Dog Food', price: 19.99 },
    { id: 2, name: 'Cat Food', price: 34.99 },
    { id: 3, name: 'Bird Seeds', price: 10.99 }
];

app.get('/products', cors(), function (req, res, next) {
    res.json(products);
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});