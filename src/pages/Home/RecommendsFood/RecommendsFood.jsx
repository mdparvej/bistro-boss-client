import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import SingleFoods from "./SingleFoods";
import { useEffect, useState } from "react";
const RecommendsFood = () => {
    const [menu,setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const singleMenu = data.filter(item => item.category === 'popular');
            setMenu(singleMenu);
        })
    },[])
    return (
        <section>
            <SectionTitle
                titleHead={"Should Try"}
                titleBody={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <Swiper
        slidesPerView={3}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            menu.map(item => <SwiperSlide
                    key={item._id}
                >
                    <SingleFoods item={item}></SingleFoods>
                </SwiperSlide> )
        }
        
      </Swiper>
        </section>
    );
};

export default RecommendsFood;