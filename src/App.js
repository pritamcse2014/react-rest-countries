import './App.css';
import Footer from './components/Footer/Footer';
import LoadCountries from './components/LoadCountries/LoadCountries';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
      <Footer></Footer>
    </div>
  );
}

export default App;
