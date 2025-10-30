
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <>
        <SectionTitle titleHead="From 11:00am to 10:00pm" titleBody="ORDER ONLINE"></SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" srcSet="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" srcSet="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" srcSet="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" srcSet="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Dezzerts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" srcSet="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Cakes</h3>
        </SwiperSlide>
      </Swiper>
      </>
    );
};

export default Category;