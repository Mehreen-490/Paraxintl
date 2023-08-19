import { Box, Chip, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Stack } from "@mui/system";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "swiper/css/navigation";

const sliderSetting = {
  slidesPerView: 1,
  pagination: {
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  navigation: true,
  modules: [Pagination, Autoplay, Navigation],
};

const ProductSlider = ({ images }) => {
  console.log("images", images);
  return (
    <Box w="100%">
      <Swiper {...sliderSetting} height="20px" setWrapperSize={true}>
        {images.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  backgroundImage: `url("${image}")`,
                  backgroundSize: "100% 100%",
                  borderBox: 3,
                  w: "100%",
                  height: "400px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "none",
                  }}
                ></Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default function ProductDetailDialog({ isOpen, openModal, product }) {
  const images = [product.fontImage, product.backImage];
  const handleClose = () => {
    openModal(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="md"
    >
      <DialogContent p={0}>
        {/* <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText> */}

        <Stack direction="row" width="100%" height="100%">
          <Box width="50%">
            <ProductSlider images={images} />
          </Box>
          <Stack width="100%" pl={1} pt={1}>
            <Box
              sx={{
                position: "absolute",
                top: "6px",
                right: "6px",
                cursor: "pointer",
              }}
            >
              <HighlightOffIcon onClick={handleClose} />
            </Box>
            <Typography
              sx={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                fontSize: "20px",
                // borderBottom: "1px solid rgba(0,0,0,0.2)",
                pb: "8px",
              }}
            >
              {product.title}
            </Typography>
            <hr />
            <Typography fontWeight="100" fontSize="14px" mt={2}>
              <b>SKU: </b>AAI-LCU-002
            </Typography>
            <Typography fontWeight="bold" fontSize="14px" mb={2}>
              <Stack direction="row" width="100%">
                <b>Categories: </b> &nbsp;
                {product.categories.map((category) => {
                  return <Chip label={category} size="small"></Chip>;
                })}
              </Stack>
            </Typography>
            <hr />
          </Stack>
        </Stack>
      </DialogContent>
      {/* <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions> */}
    </Dialog>
  );
}
