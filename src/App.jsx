import './App.css';
import {Header, Hero, Contact, Footer} from './atoms'
import {Main} from './molecules'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
