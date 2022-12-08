import React from 'react';
import Data from '../Helpers/data'
import './Cartelera.css'
//const data = require('../Helpers/data');

// //Llamo a elementos de html por js, medidante el DOM (objeto document)
// const contenedorDeProductosHTML = document.getElementById("contenedorDeProductos")

// //Template strings
// const crearPlantilla = (evento) =>{
//     return `<div class="carta">
//                 <h2>${evento.titulo}</h2>
//                 <img src="${evento.img}" class="imgCard" >
//                 <p>Fecha: ${evento.fecha}</p>
//                 <p>Lugar: ${evento.lugar}</p>
//             </div>` 
// }

// const renderizarCartas = (listaEventos) =>{
//     if(listaEventos.length !== 0){
//         contenedorDeProductosHTML.innerHTML = ""
//         for( let evento of listaEventos ){
//             contenedorDeProductosHTML.innerHTML += crearPlantilla(evento)
//         }
//     }else{
//         contenedorDeProductosHTML.innerHTML = `<h1>No existen productos con esas especificaciones</h1>`
//     }
    
// }

// renderizarCartas(eventos)

///////////////////

//Llamo a elementos de html por js, medidante el DOM (objeto document)
const contenedorDeProductosHTML = document.getElementById("contenedorDeProductos")

//Template strings
const crearPlantilla = (evento) =>{
    return `<div class="carta">
                <h2>${evento.titulo}</h2>
                <img src="${evento.img}" class="imgCard" >
                <p>Fecha: ${evento.fecha}</p>
                <p>Lugar: ${evento.lugar}</p>
            </div>` 
}

const renderizarCartas = (listaEventos) =>{
    if(listaEventos.length !== 0){
        contenedorDeProductosHTML.innerHTML = ""
        for( let evento of listaEventos ){
            contenedorDeProductosHTML.innerHTML += crearPlantilla(evento)
        }
    }else{
        contenedorDeProductosHTML.innerHTML = `<h1>No existen productos con esas especificaciones</h1>`
    }
    
}

//renderizarCartas(data.frameworks)

//HTML
export default function Eventos() {
    
    
    
    return (
        <main id="contenedorDeProductos" className="contenedor">
        </main>
        );
    }                                                                                                

////////////


console.log(Data);