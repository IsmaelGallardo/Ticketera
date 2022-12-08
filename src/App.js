import logo from './logo.svg';
import './App.css';

import NavBar from './componentees/NavBar/NavBar';
import CarouselFadeExample from './componentees/Carousel/Carousel'
import Grid from './componentees/Grid/Grid'
import Footer from './componentees/Footes/Footer'
import Eventos from './componentees/Cartelera/Cartelera';
import { Route, Routes } from 'react-router-dom';






function App() {
  return (
    <>
    <NavBar/>
    <CarouselFadeExample/>
    <Grid/>
    <Eventos/>
    <Footer/>
    </>
    
    //<Footer/>

    //<Footer/>

    // <Routes>
    //   <Route></Route>
    // </Routes>

    // <div className="App">
    //   <OffcanvasExample/>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>    
    //   </header>
    //   <Footer/>
    // </div>

    
  );
}

export default App;
