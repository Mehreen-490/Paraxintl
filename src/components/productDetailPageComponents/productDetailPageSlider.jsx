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
          backgroundSize: "100% 100%",
          backgroundImage: `url(${imageSrc})`,
        }}
        key={imageIndex}
        width="100%"
        height="100%"
      >
        {/* <img src={imageSrc} width="100%" height="100%" /> */}
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
            // eslint-disable-next-line
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
                // color: "white",
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
    "https://images.pexels.com/photos/397978/pexels-photo-397978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1561328635-c1c6ad1753b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1411&q=80",
    "https://images.pexels.com/photos/6631415/pexels-photo-6631415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6291080/pexels-photo-6291080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <Box
      bgcolor="black"
      width="100%"
      height="100%"
      className="productDetailPageSlider"
      borderRadius="10px"
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          width: "100%",
          height: "75%",
          borderRadius: "10px 10px 0 0",
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
        style={{
          width: "100%",
          height: "25%",
        }}
      >
        {images.map((imageSrc, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={imageSrc} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
