import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "../../../src/App.css";
const MainSlider = () => {
  const images = [
    {
      url: "http://surgical.paraxintl.com/wp-content/uploads/2023/04/beauty-1.jpg",
      caption: "Parax International",
    },
    {
      url: "https://images.pexels.com/photos/7108111/pexels-photo-7108111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Surgical Tools Over Blue Surface",
    },
    {
      url: "https://images.unsplash.com/photo-1643660527072-47bd5735f721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      caption: "Dental Instruments",
    },
    {
      url: "https://images.unsplash.com/photo-1561328635-c1c6ad1753b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1411&q=80",
      caption: "Organized and packaged dental supplies in a drawer",
    },
    {
      url: "https://images.pexels.com/photos/397978/pexels-photo-397978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Close-up View of Steel Medical Instrument",
    },
    {
      url: "https://images.pexels.com/photos/6631415/pexels-photo-6631415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Mask & Glove",
    },
    {
      url: "https://images.pexels.com/photos/6627693/pexels-photo-6627693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Genetic DNA Kit",
    },
    {
      url: "https://images.pexels.com/photos/6291080/pexels-photo-6291080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Surgical Tools Over Blue Surface",
    },
    {
      url: "https://images.pexels.com/photos/7468920/pexels-photo-7468920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Person Holding a Rolled Gauze",
    },
    {
      url: "https://images.pexels.com/photos/7722608/pexels-photo-7722608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Sample Tubes",
    },
  ];

  return (
    <Carousel
      animation="fade"
      navButtonsAlwaysVisible={true}
      NextIcon={<NavigateNextIcon />}
      PrevIcon={<NavigateBeforeIcon />}
      autoPlay={false}
      height={510}
      indicatorContainerProps={{
        style: {
          marginTop: "10px", // 5
          textAlign: "center", // 4
          zIndex: "100",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          padding: "5px", // Adjust the size
        },
      }}
    >
      {images.map((item, i) => (
        <Item key={i} imageUrl={item.url} caption={item.caption} />
      ))}
    </Carousel>
  );
};

export default MainSlider;

function Item(props) {
  return (
    <>
      <Paper
        sx={{
          height: "100% ",
          width: "100%",
          backgroundImage: `url(${props.imageUrl})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="carousel-item-content">
          <div
            className="carousel-item-image"
            style={{
              backgroundImage: `url(${props.imageUrl})`,
            }}
          >
            <div className="overlay"></div>
          </div>
        </div>
        <div className="carousel-item-caption">{props.caption}</div>
      </Paper>
    </>
  );
}
