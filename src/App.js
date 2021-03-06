import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthenticatedRoute from "./components/LoginPage/AuthenticatedRoute.jsx";

import Header from './components/layout/Header';

import Banners from './components/layout/Banners';
import Footer from './components/layout/Footer';
import About from './components/layout/About';
import CopyRight from './components/layout/CopyRight';
import Cabs from './components/layout/Cabs';
import LoginPage from './components/layout/LoginPage';
import CustomerRegister from './components/layout/CustomerRegister';
import DriverRegister from './components/layout/DriverRegister';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Banner from './components/layout/Banners';
import Admin from './components/layout/Admin.js';
import CustomerCab from './components/CustomerPages/CustomerCab';

import DriverDetailAuto from './components/CustomerPages/DriverDetailAuto';
import DriverDetailmini from './components/CustomerPages/DriverDetailmini';
import DriverDetailPrime from './components/CustomerPages/DriverDetailPrime';
import AllTrips from './components/layout/AllTrips';
import Contact from './components/layout/Contact';
import { Provider } from "react-redux";
import store from "./Store.js";
import CabWiseTrip from './components/layout/CabWiseTrip';
import AllCustomer from './components/layout/AllCustomer';
import AllDriver from './components/layout/AllDriver';
import AllCab from './components/layout/AllCab';
import Logincustomer from './components/LoginPage/Logincustomer';
import Logindriver from './components/LoginPage/Logindriver';
import Loginadmin from './components/LoginPage/Loginadmin.js';
import DriverWelcome from './components/DriverPages/DriverWelcome';
import CustomerDash from './components/CustomerPages/CustomerDash';

import Cabdetail from './components/layout/Cabdetail';
import TripBookAuto from './components/CustomerPages/TripBookAuto';
import CustBookings from './components/CustomerPages/CustBookings';
 import TripBookMini from './components/CustomerPages/TripBookMini';
 import TripBookPrime from './components/CustomerPages/TripBookPrime';
 import Logout from "./components/LoginPage/Logout";





function App() {
  return (
    <Provider store={store}>
    
    <Router>
    <div className="App">
    <Header/>
    <LoginPage/>
    <Route path="/home" component={Banner}/>
     <Route path="/cabs" component={Cabs}/>
     <Route path="/about" component={About}/>
     
     <Route path="/contact" component={Contact}/>
     <Route path="/customerregister" component={CustomerRegister}></Route>
     <Route path="/driverregister" component={DriverRegister}></Route>
    
     <Route path="/driverfirstpage" component={DriverDetailAuto}></Route>
     <Route path="/driversecondpage" component={DriverDetailmini}></Route>
     <Route path="/driverthiredpage" component={DriverDetailPrime}></Route>
     <AuthenticatedRoute path="/alltrips" component={AllTrips}/>
     <AuthenticatedRoute path="/cabwisetrip" component={CabWiseTrip}/>
     <AuthenticatedRoute path="/allcustomer" component={AllCustomer}/>
     <Route path= "/selectcabpage" component={CustomerCab}></Route>
     <AuthenticatedRoute path= "/alldriver" component={AllDriver} />
     <AuthenticatedRoute path= "/allcab" component={AllCab}/>
     <Route path= "/customerlogin" component={Logincustomer}></Route>

    

     <Route path="/logincustomerpage" component={Logincustomer}></Route>

     <Route path="/logindriverpage" component={Logindriver}></Route>

     <Route path="/loginadminpage" component={Loginadmin}></Route>

     <Route path="/driverhome" component={DriverWelcome}/>

     <AuthenticatedRoute path="/adminpath" component={Admin}/>

     <Route path="/costomerschedule" component={CustomerDash}/>
     <Route path="/finaltripauto" component={TripBookAuto}/>
     <Route path="/finaltripmini" component={TripBookMini}/>
  <Route path="/finaltripprime" component={TripBookPrime}/>
     <Route path="/cabinsert" component={Cabdetail}/>
     <AuthenticatedRoute path="/custbook" component={CustBookings}/>
     <Route path="/logout" component={Logout} />
      
     <Footer/>
     <CopyRight/>
   </div>
   </Router>
   </Provider>
  );
}

export default App;
