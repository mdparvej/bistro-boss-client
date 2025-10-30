import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import {useParams} from "react-router";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import FoodCard from "../FoodCard/FoodCard";
const Order = () => {
    const {category} = useParams();
    const [size,setSize] = useState(4);
    const [page,setPage] = useState(0);
    
    const categories = ["salad","pizza","soup","dessert","drinks"];
    const [menu] = useMenu();
    const initialIndex = categories.indexOf(category);
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    const tablist = [salad,pizza,soup,dessert,drinks];
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const productCount = menu.filter(item => item.category === categories[tabIndex]);
    const pages =  productCount ?   Math.ceil(productCount.length/size) :  5 ;

    
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order now</title>
      </Helmet>
      <Cover img={orderCover} title={"Order Food"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
        {
          tablist.map(item => <TabPanel
            key={item._id}
          ><div className="grid grid-cols-3 space-y-4">
            {
              item.map(newItem => <FoodCard
                key={newItem._id}
                item={newItem}
              ></FoodCard>)
            }
            
            </div>
            <div className="text-center">
              {
              [...Array(pages).keys()].map(number => <button className="btn btn-primary mx-1" key={number} onClick={() => setPage(number+1) }>{number+1}</button>)
              } 
            </div>
          </TabPanel>)
        }
      </Tabs>
    </div>
  );
};

export default Order;
