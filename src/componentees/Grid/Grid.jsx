import React from 'react';
import '../../css/bootstrap.min.css'
import './Grid.css'
import Data from '../Helpers/data'
import img1 from '../img/0004.webp' 
import img2 from '../img/0005.webp' 
import img3 from '../img/0006.webp' 

//console.log(Data[0])

export default function Grid() {
    return (
    <>
        <div className="contenido py-5 bg-light text-bg-light">
            <h3 className="border-bottom">Eventos destacados</h3>
            <div className="contenido__destacado border-bottom">
                <div className="contenido__imagen ">
                    <img src={img1} alt="" class="align-items-center"/>
                    <h5 className="py-2">{Data[3].titulo}</h5>
                    <h6>Fecha: {Data[3].fecha}</h6>
                    <h6>Lugar: {Data[3].lugar}</h6>
                </div>
                <div className="contenido__imagen ">
                    <img src={img2} alt=""/>
                    <h5 className="py-2">{Data[4].titulo}</h5>
                    <h6>Fecha: {Data[4].fecha}</h6>
                    <h6>Lugar: {Data[4].lugar}</h6>
                </div>
                <div className="contenido__imagen ">
                    <img src={img3} alt=""/>
                    <h5 className="py-2">{Data[5].titulo}</h5>
                    <h6>Fecha: {Data[5].fecha}</h6>
                    <h6>Lugar: {Data[5].lugar}</h6>
                </div>
            </div>
        </div>
    </>
    );
}

/*
`<div class="carta">
                <h2>${evento.titulo}</h2>
                <img src="${evento.img}" class="imgCard" >
                <p>Fecha: ${evento.fecha}</p>
                <p>Lugar: ${evento.lugar}</p>
            </div>` 
            */