import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../Components/Header/Header";
import Main from "../Components/MainContent/MainContent";
import About from "../Components/About/About";
import Patients from "../Components/Patients/Patients";
import Providers from "../Components/Providers/Providers";
import Facility from "../Components/Facility/Facility";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Insurance from "../Components/Insurance/Insurance";
import Career from "../Components/Career/Career";
import Staff from "../Components/Staff/Staff";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route path="/facility" exact>
            <Facility />
          </Route>
          <Route path="/Patients" exact>
            <Patients />
          </Route>
          <Route path="/Providers" exact>
            <Providers />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/Insurance" exact>
            <Insurance />
          </Route>
          <Route path="/career" exact>
            <Career />
          </Route>
          <Route path="/staff" exact>
            <Staff />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
