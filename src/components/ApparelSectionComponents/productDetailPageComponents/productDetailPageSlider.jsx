import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Box } from "@mui/material";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

function getSliderImage(imageSrc, imageIndex) {
  const handleViewSimpleGallery = () => {};

  return (
    <SwiperSlide key={imageIndex}>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url("${imageSrc}")`,
          backgroundSize: "100% 100%",
        }}
        width="100%"
        height="400px"
        key={imageIndex}
      >
        {/* <img src={imageSrc} /> */}
        <Box
          sx={{
            position: "absolute",
            top: "4px",
            right: "4px",
            color: "white",
          }}
        >
          <a
            href={imageSrc}
            key={"my-test-gallery" + "-" + imageIndex}
            target="_blank"
            rel="noreferrer"
          >
            <FullscreenIcon
              backgroundColor="red"
              width="2px"
              onClick={handleViewSimpleGallery}
              height="2px"
              sx={{
                color: "white",
                backgroundColor: "#f1f1f1",
                borderRadius: "4px",
                color: "black",
                "&:hover": {
                  color: "white",
                  backgroundColor: "black",
                },
              }}
            />
          </a>
        </Box>
      </Box>
    </SwiperSlide>
  );
}

export default function ProductDetailPageSlider() {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-test-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
  ];

  return (
    <Box width="100%" bgcolor="black" className="productDetailPageSlider">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        id="my-test-gallery"
      >
        {images.map((imageSrc, imageIndex) => {
          return getSliderImage(imageSrc, imageIndex);
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((imageSrc, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={imageSrc} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
