
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featurs from '../Featurs/Featurs';
import FoodReview from '../FoodReview/FoodReview';
import PopularMenu from '../PopularMenu/PopularMenu';
import RecommendsFood from '../RecommendsFood/RecommendsFood';
import ReviewSlied from '../ReviewSlied/ReviewSlied';
const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss | Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <FoodReview></FoodReview>
            <PopularMenu></PopularMenu>
            <RecommendsFood></RecommendsFood>
            <Featurs></Featurs>
            <ReviewSlied></ReviewSlied>
        </div>
    );
};

export default Home;