import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Home/header/header";
import Footer from "./Home/footer/footer";
import Slider from "./Home/slider/Slider";
import Stay from "./Home/stayInTouch/stayInTouch";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Stay />
      <Footer />
    </div>
  );
}

export default App;
