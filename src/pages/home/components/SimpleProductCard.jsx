function SimpleProductCard({ product, colSpan = 1 }) {
  const { image, name, price } = product;
  
  return (
    <div className={`col-span-${colSpan}`}>
      <div className="h-64 sm:h-72 md:h-80 lg:h-96">
        <img
          src={image}
          alt={name}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>
      <div className="mt-2">
        <span className="text-lg sm:text-xl md:text-2xl block">{name}</span>
        <span className="text-base sm:text-lg md:text-xl block">${price}</span>
      </div>
    </div>
  );
}

export default SimpleProductCard; 