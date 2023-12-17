import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Catalog from './components/Catalog';
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Home />
      <h1 style={{ backgroundColor: 'blue' }}>HI</h1>
      <Catalog />
      <Footer />
    </div>
  )
}

export default App
