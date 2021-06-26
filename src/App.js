import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
    return(
        <div>
         <NavbarComp />
         <Router>
             <Switch>
                 <Route path='/home' exact>
                     <Home />
                 </Route>
                 <Route path='/contact' exact>
                     <Contact />
                 </Route>
                 <Route path='/about' exact>
                     <About />
                 </Route>
             </Switch>
         </Router>
            
        </div>
    )
}

export default App;