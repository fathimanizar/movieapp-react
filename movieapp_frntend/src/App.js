

import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import AddMovie from './components/AddMovie';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/add' element={<AddMovie data={{movie_name:'',actor:'',actress:'',director:'',released_year:'',camera:'',producer:'',language:''}} method='post'/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        
      </Routes>
      <Footer/>
     

    </div>
  );
}

export default App;
