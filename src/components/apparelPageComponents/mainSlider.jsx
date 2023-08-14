import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const MainSlider = () => {
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
    <Carousel
      navButtonsAlwaysVisible={true}
      NextIcon={<NavigateNextIcon />}
      PrevIcon={<NavigateBeforeIcon />}
      autoPlay={false}
      height={500}
      indicatorContainerProps={{
        style: {
          marginTop: "10px", // 5
          textAlign: "center", // 4
          zIndex: "100",
        },
      }}
    >
      {images.map((url, i) => (
        <Item key={i} imageUrl={url} />
      ))}
    </Carousel>
  );
};

export default MainSlider;

function Item(props) {
  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${props.imageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    ></Paper>
  );
}
