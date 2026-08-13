import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import EventDetailsPage from './pages/EventDetailsPage';
import './styles/global.css';

export default function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/event/:id" element={<EventDetailsPage/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
