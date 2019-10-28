import React, { Component } from 'react';



class Section extends Component {
    render() {
        return (
            <div className="sectionMainCont">
                <div className="contUno">
                    <h1>UXMAL STREAM</h1>
                
                    <p>Uxmal crea experiencias. No solo es ambientar espacios, se trata de conectar
                        a la gente mediante emociones, recuerdos y sentimientos positivos</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VUK3E2UIYuA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p><strong>¡Conoce Nuestros Servicios!</strong></p>
                    </div>
                    <div className="contDos">
                        <div className="vidsCont"><p><strong>Musica Ambiental</strong></p><p>Playlist personalizados por horarios basados en tu marca y perfil de tus clientes</p></div>
                        <div className="vidsCont"><p>Mayor interactividad en tus pantallas para llamar la atencion de tus clientes logrando un mejor impacto en tu comunnicacion</p></div>
                        <div className="vidsCont"><p>Administra el tiempo de tus pantallas de forma remota y en tiempo real</p></div>
                        <div className="vidsCont"><p>Genera el ambiente que necesitas para aumentar el tiempo de permanencia</p></div>
                        <div className="vidsCont"><p>Contamos con todas las licencias y administramos tu pago de derechos</p></div>
                        <div className="vidsCont"><p>Generamos visuales personalizados para tu marca logrando un diferenciador ante tus competidores</p></div>
                     </div>   
            </div>
        );
    }
}





export default Section;
