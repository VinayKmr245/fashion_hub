import { CarouselView } from "./Carousel/CarouselView";
export default function HomePage(){
    return (
        <>
          <div className="main-container">
            <div className="app-view">
              <CarouselView></CarouselView>
            </div>
          </div>
        </>
      );
}