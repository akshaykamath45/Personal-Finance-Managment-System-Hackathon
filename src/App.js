
import './App.css';
import travel_01 from './assets/travel-01.jpg';
import travel_02 from './assets/travel-02.jpg';
import travel_03 from './assets/travel-03.jpg';
import {Hero} from './components/Hero';
import {Slider} from './components/Slider';

function App() {
  return (
    <div className="App">
      <Hero imageSrc={travel_01}/>
      <Slider imageSrc={travel_02} title={"Be an Explorer!"} subtitle={"Our platform offer a wide range of unique travel locations"}/>
      <Slider imageSrc={travel_03} title={"Memories for a Life Time!"} subtitle={"Your dream location is just a few clicks away.."} flipped={true}/>
    </div>
  );
}

export default App;
