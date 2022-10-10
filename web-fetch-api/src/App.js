import Navbar from './components/Navbar/Navbar';
import './App.css';
//import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import Footer from './components/Footer/Footer'
//import Home from './pages/Home';
//import SignIn from './pages/SignIn';
import Sidebar from './components/Sidebar/Sidebar';
//import Help from './pages/Help';
//import Characters from './pages/Characters';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Footer />
    </>
    
  );
}

export default App;
