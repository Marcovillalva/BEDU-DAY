import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';




class Layout extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }  
}


export default Layout