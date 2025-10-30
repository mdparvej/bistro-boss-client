
import { Helmet} from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg';
import imgDessert from '../../../assets/menu/dessert-bg.jpeg'; 
import imgSoup from '../../../assets/menu/salad-bg.jpg'; 
import imgSalad from '../../../assets/menu/soup-bg.jpg'; 
import imgPizza from '../../../assets/menu/pizza-bg.jpg'; 
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    return (
        <div>
            <Helmet>
                <title> Bistro Boss | Menu</title>
            </Helmet>
            <Cover title={"Our Menu"} img={img}></Cover>
            {/* main cover */}
            <SectionTitle titleHead="don't mess" titleBody="TODAY'S OFFER"></SectionTitle>
            {/* main cover */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu item */}
            <MenuCategory items={dessert} title={"dessert"} coverImg={imgDessert}></MenuCategory>
            {/* Soup men u item */}
            <MenuCategory items={soup} title={"soup"} coverImg={imgSoup}></MenuCategory>
            {/* Salad menu item */}
            <MenuCategory items={salad} title={"salad"} coverImg={imgSalad}></MenuCategory>
            {/* pizza menu item */}
            <MenuCategory items={pizza} title={"pizza"} coverImg={imgPizza}></MenuCategory>
        </div>
    );
};

export default Menu;