import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.json({message: 'Hello world'});
});

app.listen(3000, () => console.log('Listening on port 3000'));