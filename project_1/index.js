const mongoose = require('mongoose')
const url_BD = ('mongodb://localhost:27017/Tienda_autos')

mongoose.connect(url_BD)
.then(() => {
    console.log('Sirve la conexion')
})
.catch ((err)=> {
    console.log('No sirve')
})

const esquema_Tienda = new mongoose.Schema(
{
    marca: {
        type: String
    },
    Modelo: {
        type: String
    },
    color: {
        type: String
    },
    precio: {
        type: Number
    },
    Electrico_o_gasolina: {
        type: String
    },
    semi_nuevo_Nuevo: {
        type: String
    },
    Tipo_Cilindrage: {
        type: String
    }

})

const mondelo_Auto = new mongoose.model(
    "Tabla de datos personales", esquema_Tienda)

    mondelo_Auto.create ({
        marca: "Nissan",
        Modelo:  "Versa",
        color:  "Rojo",
        precio: 12000,
        Electrico_o_gasolina: "Gasolina",
        semi_nuevo_Nuevo: "Seminuevo",
        Tipo_Cilindrage: "4 cilindros"

    })
