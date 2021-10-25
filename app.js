const { response, request } = require('express')
const express = require('express')
const { multiply } = require('mathjs')
const app = express()
const math = require('mathjs')
const port = 5000



app.use(express.json())

app.post('/numeros/sumatoria',(request,response)=>{
    console.log(request.body.numeros)
    const suma = math.sum(request.body.numeros)
    
    var result = {
        resultado: suma
    }
    response.send(result)
    
})

app.post('/numeros/productoria', (request, response)=>{
    const producto = math.prod(request.body.numeros)
    var result_produc ={
        resultado: producto
    }
    response.send(result_produc)
})

app.post('/numeros/extremos', (request, response) =>{
    let menor = math.min(request.body.numeros)
    let mayor = math.max(request.body.numeros)

    var menor_mayor={
        men: menor,
        may: mayor
    }
    response.send(menor_mayor)
})

app.post('/numeros/resta', (request, response) =>{

    const resta = math.subtract(request.body.numeroA, request.body.numeroB)

    var result_resta ={
        resultado:resta
    }
    response.send(result_resta)
})

app.post('/numeros/division', (request, response) =>{

    let division = math.divide(request.body.numeroA, request.body.numeroB)

    var result_div ={
        resultado:division
    }
    response.send(result_div)
})

app.post('/matrices/suma', (request, response)=>{
    
    let sum_m =math.add(request.body.matrizA, request.body.matrizB)

    let result_sum_m ={

        resultado: sum_m
    }

    response.send(result_sum_m)
})

app.post('/matrices/multiplicacion', (request, response)=>{

    let multi_m = math.multiply(request.body.matrizA, request.body.matrizB)

    let result_multi_m = {
        resultado: multi_m
    }

    response.send(result_multi_m)
})

app.post('/matrices/determinante', (request, response)=>{

    let deter_m = math.det(request.body.matrizA, request.body.matrizB)

    let result_deter_m ={
        resultado: deter_m
    }

    response.send(result_deter_m)
})


app.listen(port,() =>{
    console.log('Escuchando en puerto: ${port}')
})




