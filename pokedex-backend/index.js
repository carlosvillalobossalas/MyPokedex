const express = require('express');
const cors = require('cors');


const app = express();


app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.use('/api/pokemon', require('./routes/pokemon'));

app.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000')
})