import "./App.css";
import { CarouselView } from "./components/Carousel/CarouselView";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="app-view">
          <NavBar></NavBar>
          <CarouselView></CarouselView>
        </div>
        <div className="color-bar">
          <div className="icon-container">
            <div className="icon">
              <span className="material-symbols-outlined">search</span>
            </div>
            <div className="icon">
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>
            <div className="icon">
              <span className="material-symbols-outlined">person</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
