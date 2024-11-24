import { Navigation, Pagination, A11y, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ComBanner from "../components/common/ComBanner";
import MainHeader from "../components/common/MainHeader";

import "./Lbd.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner_img from "../assets/img/banner/bg_banner_04.jpg";
import mockImg from "../assets/img/nft/nft_img_03.png";

import ComImgCard from "../components/common/ComImgCard";

const mockTokenType = [
  { id: 1, tokenType: "10000001", img: mockImg },
  { id: 2, tokenType: "10000002", img: mockImg },
  { id: 3, tokenType: "10000003", img: mockImg },
  { id: 4, tokenType: "10000004", img: mockImg },
  { id: 5, tokenType: "10000005", img: mockImg },
];

const Lbd = () => {
  return (
    <div className="Lbd">
      {/* Banner */}
      <ComBanner
        title={"a21f345"}
        subtitle={"CONTRACT ID"}
        backgroundImage={banner_img}
        buttonText={"Mitn Scan 바로가기"}
      />

      <div className="content_container">
        <section className="token_type_wrapper">
          <h1 className="token_type_title">아이템 타입</h1>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Virtual]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {mockTokenType.map((item) => (
              <SwiperSlide className="swiper" key={item.id}>
                <ComImgCard
                  title={"Token Type"}
                  content={item.tokenType}
                  img={item.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="api_control_wrapper">
          <h1 className="token_type_title">API</h1>
        </section>
      </div>
    </div>
  );
};

export default Lbd;
