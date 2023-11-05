export const CarouselItem = (props) => {
  console.log(props, "item");
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>
          <span className="material-symbols-outlined">shopping_bag</span>
          Add to Cart
        </button>
      </p>
    </div>
  );
};
