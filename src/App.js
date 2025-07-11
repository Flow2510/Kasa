import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import About from './pages/About';
import Main from './component/main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;