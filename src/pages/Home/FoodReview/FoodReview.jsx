
import bgImg from '../../../assets/home/chef-service.jpg';
const FoodReview = () => {
    return (
        <div style={{backgroundImage:`url(${bgImg})`}} className='my-6 p-6'>
        <div className={` md:w-10/12 mx-auto bg-white p-20 my-20 text-black text-center`}>
            <h2 className='text-5xl uppercase my-4'>Bistro Boss</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique a, eum voluptates dolore recusandae possimus nemo facere omnis esse
                 nesciunt ea doloribus quos delectus nulla fugit molestias sapiente illum?</p>
        </div>
        </div>
    );
};

export default FoodReview;