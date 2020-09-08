
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

const options = { 
    reconnectTries: Number.MAX_VALUE, 
    reconnectInterval: 500, 
    poolSize: 5, 
    useNewUrlParser: true ,    
    useNewUrlParser: true,
    useFindAndModify: false,
    retryWrites: true,
    w: "majority",
};
mongoose.connect(config.connectionString, options);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Models
const House = require('./models/house');

// Rotas
const houseRoute = require('./routes/house-route');


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/house', houseRoute);

const route = router.get("/", (req, res) => {
    res.status(200).send({
        title: "Node API NewTail",
        version: "0.0.1",
    });
});
app.use("/", route);

module.exports = app;