

const SingleFoods = ({item}) => {
    const {image,price,name,recipe} = item;
  return (
    <div className="h-[600px]">
      <div className=" w-96 glass">
        <figure>
          <img
            className="w-full"
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-center mx-auto">Life hack</h2>
          <h3 className="bg-black text-white absolute px-5 top-4  right-4 rounded-xl">${price}</h3>
          <p className="mx-auto">{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary mx-auto btn-outline  border-x-0 border-t-0">Add to card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFoods;
