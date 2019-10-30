import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
//import Login from './Login';
import Section from './Section';





class Layout extends Component {
    render(){
        return(
            <div className="MainContLayout">
                <Header/>
                <Section/>
                <Footer/>
            </div>
        );
    }  
}


export default Layout