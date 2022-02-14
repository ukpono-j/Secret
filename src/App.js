import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Swingers from './components/pages/Swingers';
import { BrowserRouter as Router,  Route,  Switch  } from 'react-router-dom';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import Shop from './components/pages/Shop';
import ForgotPassword from './components/pages/ForgotPassword';
import MainHome from './components/pages/MainHome';
import Feeds from './components/pages/Feeds';

function App() {
  return (
    <Router>
      <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/swingers' exact component={LogIn} />
             <Route path='/shop' exact component={LogIn} />
             <Route path='/login' exact component={LogIn} />
             <Route path='/mainHome' exact component={MainHome} />
             <Route path='/feeds' exact component={Feeds} />
             <Route path='/forgotPassword' exact component={ForgotPassword} />
             <Route path='/signUp' exact component={SignUp } />
      </Switch >
    </Router>

  );
}

export default App;
