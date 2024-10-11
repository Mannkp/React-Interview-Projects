import "./App.css";
import Accordian from "./components/Accordian";
import ImageSlider from "./components/ImageSlider";
import RandomColorGenerator from "./components/RandomColorGenerator";
import StarRatings from "./components/StarRatings";
import LoadMore from "./components/LoadMore";
import TreeView from "./components/TreeView";
import LightDarkMode from "./components/LightDarkMode";
import useLocalStorage from "./hooks/useLocalStorage";
import ScrollIndicator from "./components/ScrollIndicator";
import Modal from "./components/Custom-Modal-Popup/Modal";
import CounterwithUseReducer from "./components/ReducerExample-Counter/CounterwithUseReducer";
import GithubProfileFinder from "./components/GithubProfileFinder";
import TicTacToe from "./components/TicTacToe";
import DynamicForms from "./components/DynamicForms";

function App() {
  //reading userPreference of theme!
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  return (
    <>
      <header>
        <TreeView />
      </header>
      <div className="App" data-theme={theme}>
        <DynamicForms />
        <Accordian />
        <CounterwithUseReducer />
        <RandomColorGenerator />
        <StarRatings noOfStars={4} />
        <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=7"} />
        <LoadMore url={"https://dummyjson.com/products"} />
        <LightDarkMode mode={theme} setMode={setTheme} />
        <ScrollIndicator size={5} color={"tomato"} />
        <Modal />
        <GithubProfileFinder />
        <TicTacToe />
      </div>
    </>
  );
}

export default App;
