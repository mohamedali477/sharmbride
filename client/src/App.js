import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscrren from './screens/Bookingscrren';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import Landingcreen from './screens/Landingscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Route path='/home' exact component={Homescreen}/>
      <Route path='/book/:roomid/:fromdate/:todate' exact component={Bookingscrren}/>
      <Route path='/register' exact component={Registerscreen}/>
      <Route path='/login' exact component={Loginscreen}/>
      <Route path='/profile' exact component={Profilescreen}/>
      <Route path='/admin' exact component={Adminscreen}/>
      <Route path='/' exact component={Landingcreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
