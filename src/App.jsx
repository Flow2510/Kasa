import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home';
import Logement from './pages/logement';
import About from './pages/about';
import Error from './pages/error';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='app'>
      <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/*" element={<Error />} />
         <Route path="/logement" element={<Logement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;