import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import uesMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = uesMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu,setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems);
    //     })
    // },[])
    return (
        <section className="my-4">
            <SectionTitle
                titleHead="From Our Menu"
                titleBody="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;