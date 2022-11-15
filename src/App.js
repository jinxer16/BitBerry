import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Home/header/header";
import Footer from "./Home/footer/footer";
import Slider from "./Home/slider/Slider";
import Stay from "./Home/stayInTouch/stayInTouch";
import Universe from "./Home/nxtUniverse/Universe";
import Carousel from "./Home/carousel/Carousel";
import Works from "./Home/woks/works";
import Roadmap from "./Home/roadmap/roadmap";
import Tokens from "./Home/tokens/Tokens";
import ProjectDocument from "./Home/projectDocument/projectDocument";
import Mechanism from "./Home/mechanism/mechanism";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Carousel />
      <Universe />
      <Tokens />
      <Mechanism />
      <ProjectDocument />
      <Roadmap />
      <Works />
      <Stay />
      <Footer />
    </div>
  );
}

export default App;
