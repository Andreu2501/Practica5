const express = require('express');
const app = express();
const l_axios = require("axios");
var body = require('body-parser').json();
const puerto=8000;
const host='localhost';
app.listen(puerto, host);
console.log(`Servidor del Cliente: http://${host}:${puerto}`);

app.get('/', (req, res)=> {

    res.send("Servidor Cliente");
});
/***Solicitar pedido al restaurante****/
app.get('/GetOrden', (req,res)=>{
    var noOrden= 3010;
    var descripcion = "Se creo una orden con no.:"+noOrden;
    l_axios.post('http://localhost:8003/Restaurante/PostOrden',{'id':noOrden});
    res.json({'noOrden':noOrden});    
})