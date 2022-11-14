import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Home/header/header";
import Footer from './Home/footer/footer'
import Slider from "./Home/slider/Slider";
import Universe from "./Home/nxtUniverse/Universe";
import Carousel from "./Home/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider/>
      <Carousel/>
      <Universe/>
      <Footer />
    </div>
  );
}

export default App;
