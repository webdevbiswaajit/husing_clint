import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";

function Blogslider() {
  return (
    <>
      <div className="container slide mt-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsam Lorem Ipsam</h5>
                <p className="color-green">Sep 10, 2022</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsam Lorem Ipsam</h5>
                <p className="color-green">Sep 10, 2022</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsam Lorem Ipsam</h5>
                <p className="color-green">Sep 10, 2022</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsam Lorem Ipsam</h5>
                <p className="color-green">Sep 10, 2022</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <Image width={450} height={330} src="/blog.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsam Lorem Ipsam</h5>
                <p className="color-green">Sep 10, 2022</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Blogslider;
