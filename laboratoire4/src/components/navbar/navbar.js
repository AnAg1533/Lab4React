import React from 'react';
import {Route,BrowserRouter as Router} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {Link} from "react-router-dom";
import Ajout from '../ajout/ajout'
import Liste from '../liste/liste'
import AjoutDept from '../ajoutDept/ajoutDept'
import Logo from '../logo/Logo'




class Navbar extends React.Component
{   state = {redirect:null};
    render ()
    {
      
        return(
            <Router>
            
            <div className='container'>
            <div className="App">
        
                <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
                <a href="/" className="navbar-brand">BIENVENUE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/Liste">Utulisateurs</a>
                    <a className="nav-item nav-link" href="/Ajout">Ajout utulisateurs</a>
                    <a className="nav-item nav-link" href="/AjoutDept">Ajout Departement</a>
                  </div>
                </div>
              </nav>
            </div>
            
            <Route path='/Ajout' component={Ajout}/>
            <Route path='/Liste' component={Liste}/>
            <Route path='/Logo' component={Logo}/>
            <Route path='/AjoutDept' component={AjoutDept}/>
            <Route path='/' exact component={Logo}/>
            </div>
            </Router>

            
        )
    }
}

export default Navbar;