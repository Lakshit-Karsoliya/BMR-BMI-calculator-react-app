
import './App.css';
//import Navbar from './MyComponents/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './MyComponents/NavComp';
import FooterComp from './MyComponents/FooterComp';
import TabComp from './MyComponents/TabComp';
import About from './MyComponents/About';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <NavComp/>
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
         
          <Route exact path="/" render={()=>{
            return(
              <>
               <NavComp/>
              </>
            )
          }}>
          <TabComp/>
          </Route>
        </Switch>


     
     
      <FooterComp/>
    </div>
    </Router>
  );
}

export default App;
