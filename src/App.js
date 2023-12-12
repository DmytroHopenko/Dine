import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Main from './Pages/Main';
import Booking from './Pages/Booking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Main /> }/>
        <Route path='/booking' element={<Booking /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
