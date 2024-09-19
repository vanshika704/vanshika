"use client";
import { Link } from 'react-router-dom'; 
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
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-[30rem] w-full">
            <PinContainer title="ForestHill">
              <Link to="/aboutme"> {/* Updated to link to /aboutme */}
                <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden">
                  <img
                    src="src/assets/foresthill/Screenshot (73).png"
                    alt="Forest Hill"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </Link>
            </PinContainer>
          </div>
        </SwiperSlide>

        {/* Remaining Slides */}
        {[
          { title: "Sign up", src: "src/assets/all/Screenshot (64).png" },
          { title: "Exponentially", src: "src/assets/exponentially/Screenshot (59).png" },
          { title: "Weather app", src: "src/assets/gdscweather/Screenshot (88).png" },
          { title: "Pratishtha", src: "src/assets/pratishtha/Screenshot (46).png" },
          { title: "Social Media", src: "src/assets/social media/Screenshot (65).png" },
          { title: "TODO", src: "src/assets/todo/Screenshot (71).png" },
          { title: "Whatsapp", src: "src/assets/whatsapp/Screenshot_2024-08-08-20-05-29-42_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg" },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-[30rem] w-full">
              <PinContainer title={slide.title}>
                <Link to="/aboutme"> {/* Updated to link to /aboutme */}
                  <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </PinContainer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
