import "./App.css";
import { Route, Routes } from "react-router-dom";
import IconContainer from "./components/IconContainer";
import HomePage  from "./components/HomePage";
import Products from "./Products";
import BestDeals from "./BestDeals";
import NewReleases from "./NewReleases";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="app-view">
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/bestdeals" element={<BestDeals/>} />
            <Route path="/newreleases" element={<NewReleases/>} />
          </Routes>
        </div>
        <div className="color-bar">
          <IconContainer></IconContainer>
        </div>
      </div>
    </>
  );
}

export default App;


 // <>
    //   <div className="main-container">
    //     <div className="app-view">
    //       <NavBar></NavBar>
    //       <Routes></Routes>
    //       <CarouselView></CarouselView>
    //     </div>
    //     <div className="color-bar">
    //       <div className="icon-container">
    //         <div className="icon">
    //           <span className="material-symbols-outlined">search</span>
    //         </div>
    //         <div className="icon">
    //           <span className="material-symbols-outlined">shopping_cart</span>
    //         </div>
    //         <div className="icon">
    //           <span className="material-symbols-outlined">person</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>