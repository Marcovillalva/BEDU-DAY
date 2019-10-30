import React from 'react';
import Home from './components/Pages/Home';
import Servicios from './components/Pages/Servicios';
import Contacto from './components/Pages/Contacto';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';




function App() {
  return (
    <div >
      <BrowserRouter>
          <div>
            
            <Redirect from="/" to="/home" />
            <Switch>
              <Route exact path="/Home" Component={Home}/>
              <Route exact path="/Servicios" Component={Servicios}/>
              <Route exact path="/Contacto" Component={Contacto}/>
            </Switch>
            
           
          </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;

// Esta esta paginacion
{/* <BrowserRouter>
        <div>
          <NavBar />
          <Redirect from="/" to="/home" />
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/page1" render={() => <Page1 name="React Medellín" />} />
            <Route exact path="/page2" render={() => <Page2 />} />
            <Route component={PageError} />
          </Switch>
        </div>
     </BrowserRouter> */}




// Esta es la parte que va en barNav