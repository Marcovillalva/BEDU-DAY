import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
import Login from './Login';





class Layout extends Component {
    render(){
        return(
            <div className="MainContLayout">
                <Header/>
                <Footer/>
                <Login/>
            </div>
        );
    }  
}


export default Layout