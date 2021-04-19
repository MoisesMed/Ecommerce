import './App.css';
import { BrowserRouter } from 'react-router-dom';

import CountProvider from './context/Count'

import Routes from './Routes'
import Header from './components/Header';

export default function App() {
  return (
    <CountProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </CountProvider>
  );
}

