import './App.css';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Generate from './components/Generate';
import Header from './components/Header';
import News from './components/News';
import Providers from './components/Providers';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Cards />
      <Generate />
      <Providers />
      <News />
    </div>
  );
}

export default App;
