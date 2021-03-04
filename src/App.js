
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './amplify-exports';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from "./components/Login"
import SignIn from './components/SignIn'
import Home from './components/Home'


Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/home" component={Home}  />
 
  </Router>
  );
}

export default App;
