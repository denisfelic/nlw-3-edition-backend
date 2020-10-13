
import express from 'express';
import './database/connection';

const app = express();
app.use(express.json());


app.post('/user/:id', (req, res) => {
    
    res.send({
     });
});

app.listen(3333);
console.log('Server running server At 3333')