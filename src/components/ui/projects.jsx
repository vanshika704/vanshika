"use client";

import { PinContainer } from "./3-dpin";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function AnimatedPinDemo() {
  return (
    <div className="animated-pin-demo-container"> {/* Add a container for styling */}
      <div className="text-center text-slate-800 text-5xl mt-5 mb-2 font-medium font-poppins">PROJECTS</div> {/* Added heading */}
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ 
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Allow autoplay to continue after user interaction
        }}
        speed={1000} // Speed of transition between slides
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center h-[30rem] w-full"> {/* Adjusted height */}
            <PinContainer title="ForestHill" href="https://twitter.com/mannupaaji">
              <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden"> {/* Adjusted size */}
                <img
                  src="src/assets/foresthill/Screenshot (73).png"
                  alt="Forest Hill"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </PinContainer>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[30rem] w-full"> {/* Adjusted height */}
            <PinContainer title="Sign up" href="https://twitter.com/mannupaaji">
              <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden"> {/* Adjusted size */}
                <img
                  src="src/assets/all/Screenshot (64).png"
                  alt="Sign up"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </PinContainer>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[30rem] w-full"> {/* Adjusted height */}
            <PinContainer title="Exponentially" href="https://twitter.com/mannupaaji">
              <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden"> {/* Adjusted size */}
                <img
                  src="src/assets/exponentially/Screenshot (59).png"
                  alt="Exponentially"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </PinContainer>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[30rem] w-full"> {/* Adjusted height */}
            <PinContainer title="Weather app" href="https://twitter.com/mannupaaji">
              <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden"> {/* Adjusted size */}
                <img
                  src="src/assets/gdscweather/Screenshot (88).png"
                  alt="Weather app"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </PinContainer>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[30rem] w-full"> {/* Adjusted height */}
            <PinContainer title="Pratishtha" href="https://twitter.com/mannupaaji">
              <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden"> {/* Adjusted size */}
                <img
                  src="src/assets/pratishtha/Screenshot (46).png"
                  alt="Pratishtha"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </PinContainer>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[30rem] w-full"> {/* Adjusted height */}
            <PinContainer title="Social Media" href="https://twitter.com/mannupaaji">
              <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden"> {/* Adjusted size */}
                <img
                  src="src/assets/social media/Screenshot (65).png"
                  alt="Pratishtha"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </PinContainer>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[30rem] w-full"> {/* Adjusted height */}
            <PinContainer title="TODO" href="https://twitter.com/mannupaaji">
              <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden"> {/* Adjusted size */}
                <img
                  src="src/assets/todo/Screenshot (71).png"
                  alt="Pratishtha"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </PinContainer>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[30rem] w-full"> {/* Adjusted height */}
            <PinContainer title="Whatsapp" href="https://twitter.com/mannupaaji">
              <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden"> {/* Adjusted size */}
                <img
                  src="src/assets/whatsapp/Screenshot_2024-08-08-20-05-29-42_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg"
                  alt="Pratishtha"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </PinContainer>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
