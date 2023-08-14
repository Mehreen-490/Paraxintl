import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Chip,
  TextField,
  Typography,
} from "@mui/material";
import images from "../../../assets/images";
import React, { useState } from "react";
import { Stack } from "@mui/system";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ProductDetailDialog from "./productDetailDialog";

const Product = ({ product, viewType }) => {
  const [hovered, setHovered] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleProductViewDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <>
      <ProductDetailDialog
        isOpen={showDetail}
        openModal={handleProductViewDetail}
        product={product}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: viewType === "gridView" ? "column" : "row",
          alignItems: "center",
          borderBottom: viewType === "gridView" ? "" : "2px solid black",
        }}
      >
        <Box
          sx={{
            width: viewType === "gridView" ? "100%" : "258px",
            position: "relative",
            height: "258px",
            "&:hover > div": {
              display: "block",
            },
          }}
        >
          <Avatar
            src={hovered ? product.fontImage : product.backImage}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              borderRadius: "0",
              width: "100%",
              height: "100%",
              opacity: "0.8",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              background: "black",
              opacity: "0.8",
              width: "100%",
              height: "30px",
              display: "none",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              color: "white",
              textAlign: "center",
              height: "30px",
              fontWeight: "bold !imporant",
              width: "100%",
              display: "none",
              paddingTop: "4px",
              cursor: "pointer",
            }}
            onClick={handleProductViewDetail}
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <RemoveRedEyeOutlinedIcon fontSize="12px" /> &nbsp;
              <Typography>Quick View</Typography>
            </Stack>
          </Box>
        </Box>
        <Stack width="100%" justifyContent="center" alignItems="center">
          <Typography
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 500,
              lineHeight: "12px",
              color: "#3a6878",
              py: 0.8,
              letterSpacing: "0.5px",
            }}
          >
            <Stack direction="row" width="100%">
              {product.categories.map((category) => {
                return <Chip label={category} size="small"></Chip>;
              })}
            </Stack>
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 600,
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
            variant={viewType === "gridView" ? "subtitle2" : "h4"}
          >
            {product.title}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 600,
              FileSystem: "18px",
              lineHeight: "20px",
              color: "#192d34",
              border: "1px solid #192d34",
              borderRadius: "0",
              mt: 1,
              py: 1,
            }}
          >
            Read More
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Product;
