
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Ready from './components/Ready';
import Support from './components/Support';
import Upgrade from './components/Upgrade';
import Why from './components/Why';

function App() {
  return (
    <div className="w-[100vw] font-BodyFont">
<Hero/>
<Why/>
<Upgrade/>
<Support/>
<Ready/>
<Footer/>
    </div>
  );
}

export default App;
