import './App.css';
import {Header, Hero, Contact} from './atoms'
import {Main} from './molecules'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
