/* eslint-disable react/jsx-key */
import './carousel.css'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { CarouselItem } from "./carouselItem";
import {responsive,productData} from './carouselData'

export const CarouselView = () => {

  const product = productData.map((item) => (
    <CarouselItem
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ))
  return (
    <div className="App">
    <Carousel showDots={true} responsive={responsive}>
      {product}
    </Carousel>
  </div>
    
  );
};
