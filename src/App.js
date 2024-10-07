import "./App.css";
import Accordian from "./components/Accordian";
import ImageSlider from "./components/ImageSlider";
import RandomColorGenerator from "./components/RandomColorGenerator";
import StarRatings from "./components/StarRatings";
import LoadMore from "./components/LoadMore";
import TreeView from "./components/TreeView";

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColorGenerator />
      <StarRatings noOfStars={4} />
      <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=7"} />
      <LoadMore url={"https://dummyjson.com/products"} />
      <TreeView />
    </div>
  );
}

export default App;
