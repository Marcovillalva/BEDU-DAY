import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Header extends Component {
    render() {
        return (
            <div className="MainContHeader">
                <div className="logo">
                    
                </div>
                <div className="logo menu">
                
                </div>
                <div className="banav">
                        <ul>
                            <li>
                                <Link to="/home">Nosotros</Link>
                            </li>
                            <li>
                                <Link to="/servicios">Servicios</Link>
                            </li>
                            <li>
                                <Link to="/contacto">Contacto</Link>
                            </li>
                           
                        </ul>
                </div>
            </div>
        );
    }
}

                       

export default Header;
