import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
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
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  modules: [Pagination, Autoplay],
};

const ProductSlider = () => {
  const images = [
    "https://images.pexels.com/photos/7585320/pexels-photo-7585320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12411911/pexels-photo-12411911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/397978/pexels-photo-397978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6627413/pexels-photo-6627413.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15688019/pexels-photo-15688019/free-photo-of-woman-holding-botox-flask.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6627667/pexels-photo-6627667.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15688021/pexels-photo-15688021/free-photo-of-botox-flasks-on-doctor-hands.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6627664/pexels-photo-6627664.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6627693/pexels-photo-6627693.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <>
      {/* Feature Products Heading */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pt: 2,
          pb: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "31px",
            color: "#2a2e39",
          }}
        >
          Selected Products
        </Typography>
      </Box>
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
                    borderRadius: "10px",
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
                        borderRadius: "10px",
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
                        Surgical Tools
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
};

export default ProductSlider;
