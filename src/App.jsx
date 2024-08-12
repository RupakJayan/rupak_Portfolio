import { BrowserRouter } from "react-router-dom";
import HeroBg from '../src/assets/blue_bg.png';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Hero/>
          <Tech />
          <Works />
          <Feedbacks />
        </div>
        
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
