import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import React from "react";
const ReviewSlied = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="my-8">
      <SectionTitle
        titleHead={"What Our Clients Say"}
        titleBody={"TESTIMONIALS"}
      ></SectionTitle>
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          autoplay={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <div>
            {reviews?.map((item) => (
              <SwiperSlide key={item._id}>
                {
                  <div className="w-3/4 mx-auto">
                    <FaQuoteLeft className="text-8xl mx-auto my-6"></FaQuoteLeft>
                    <ReactStars classNames="mx-auto"
                      count={5}
                      onChange={item.rating}
                      size={50}
                      activeColor="#ffd700"
                      value={item.rating}
                    />
                    <h2>{item?.details}</h2>
                    <p>{item?.name}</p>
                  </div>
                }
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlied;
