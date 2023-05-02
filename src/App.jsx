import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/SharedPages/Footer/Footer';
import Home from './Components/Home/Home';
import ContactUS from './Components/ContactUS/ContactUS';
import NotFound from './Components/NotFound/NotFound';
import AboutUS from './Components/AboutUS/AboutUS';
import Header from './Components/SharedPages/Header/Header';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <div className="App pt-20">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </>
  )
}

export default App
