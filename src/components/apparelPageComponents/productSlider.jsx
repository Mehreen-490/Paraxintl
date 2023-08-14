import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Stack } from "@mui/system";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const sliderSetting = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 4,
    },
  },
  pagination: {
    clickable: true,
  },
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  modules: [Pagination, Autoplay],
};

const ProductSlider = () => {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];

  return (
    <Box w="100%">
      <Swiper
        className="paginationOutside"
        {...sliderSetting}
        height="20px"
        setWrapperSize={true}
      >
        {images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  backgroundImage: `url("${image}")`,
                  backgroundSize: "100% 100%",
                  borderBox: 3,
                  w: "100%",
                  height: "200px",
                  "&:hover > div": {
                    display: "block",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "none",
                  }}
                >
                  <Box
                    sx={{
                      opacity: "0.5",
                      display: "block",
                      width: "100%",
                      height: "100%",
                      transition: ".5s ease",
                      backfaceVisibility: "hidden",
                      background: "black",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      padding: 1,
                    }}
                  >
                    <Stack>
                      <Box
                        sx={{
                          background: "white",
                          padding: "4px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        <RemoveRedEyeIcon />
                      </Box>
                      <Box
                        sx={{
                          background: "white",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          marginTop: "4px",
                        }}
                      >
                        <InsertLinkIcon />
                      </Box>
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      padding: 1,
                      position: "absolute",
                      bottom: 0,
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: 600,
                      }}
                    >
                      Custom Logo Embroidery Men's Varsity Jacket
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default ProductSlider;
