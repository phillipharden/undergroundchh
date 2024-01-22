import "./styles/App.scss";
import Landing from './pages/Landing.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">

      <Landing />
      </div>
      <Footer />
    </>
  );
};

export default App;
