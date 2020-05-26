const mongoose = require('mongoose');

//Setting MongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/learning", {
    useMongoClient: true
}).then(() => {
    console.log("Connection with sucess!")
}).catch((fail) => {
    console.log("A fail has been ocurred..." + fail)
})

// Creating model

const UsuarioSchema = mongoose.Schema({
    nome:
    {
        type: String,
        require: true
        //require for 'obrigatoriedade'
    },
    sobrenome:
    {
        type: String,
        require: true
    },
    email:
    {
        type: String,
        require: true
    },
    idade:
    {
        type: Number,
        //qualquer tipo de número
        require: true
    },
    pais:
    {
        type: String
    }
})

//Collection
mongoose.model('usuarios', UsuarioSchema)
//creating model ('nameCollection', a que model se refere)

const usuario = mongoose.model('usuarios')
//old insert
new usuario({
    nome: "Arthur",
    sobrenome: "Shelby",
    email: "email@dominio.com",
    idade: 21,
    pais: "Inglaterra"
}).save().then(() => {
    console.log("Operation has been sucessfull");
}).catch((fail) => {
    console.log("Error ocurred in opeeration: " + fail)
})