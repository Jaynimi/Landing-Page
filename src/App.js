import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Start from "./components/Start";
import Support from "./components/Support";
import Upgrade from "./components/Upgrade";
import Choose from "./components/Choose";

function App() {
	return (
		<div className="w-[100vw] font-BodyFont box-border">
			<Hero />
			<Choose />
			<Upgrade />
			<Support />
			<Start />
			<Footer />
		</div>
	);
}

export default App;
