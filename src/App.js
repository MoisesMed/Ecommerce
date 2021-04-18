import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes'
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

