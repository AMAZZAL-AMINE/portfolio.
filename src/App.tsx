import './assets/styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { Container } from '@mui/material';
function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Home  />
      <Footer />
    </Container>
  );
}

export default App;