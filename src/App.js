import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import About from './pages/about/About';
import Main from './pages/main/Main';
import Error from './pages/error/Error';
import Logement from './pages/logements/Logement';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path='/logement' element={<Logement />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;