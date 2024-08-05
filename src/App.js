import logo from "./logo.svg";
import "./App.css";
import BackToTop from "./components/BackToTop";
import Faq from "./components/Faq";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Faq />
      <Slider />
      <BackToTop />
    </div>
  );
}

export default App;
