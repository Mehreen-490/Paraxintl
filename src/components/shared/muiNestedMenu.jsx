import React, { useState } from "react";
import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./Dropdown";
import { Avatar, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import images from "../../assets/images";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MuiNestedMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Dropdown
      trigger={
        <Button
          disableRipple
          endIcon={<KeyboardArrowDownIcon sx={{ color: "#212a39" }} />}
          sx={{
            bgcolor: menuOpen ? "#dfe4ec" : "white",
            py: 0.5,
            px: 2,
            mx: 10,
            borderBottom: "6px solid transparent",
            "&:hover": {
              bgcolor: !menuOpen ? "#dfe4ec" : "white",
            },
            width: {
              xs: "0",
              lg: "125px",
            },
            display: {
              xs: "none",
              lg: "flex",
            },
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Avatar
            src={images.products}
            sx={{
              width: "18px",
              height: "18px",
              mr: 1,
              borderRadius: "0",
            }}
          />
          <Typography
            sx={{
              color: "#212a39",
              fontSize: "16px",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            Products
          </Typography>
        </Button>
      }
      menu={[
        <DropdownNestedMenuItem
          label={
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Casual Wear
            </Typography>
          }
          rightIcon={
            <ArrowForwardIosIcon
              sx={{ width: "10px", height: "10px", mt: "2px " }}
            />
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Casual Shirts
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Track Suits
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Hoodies
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Sweat Shirts
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                T-Shirts
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Polo Shirts
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Shorts
              </Typography>
            </DropdownMenuItem>,
          ]}
        />,
        <DropdownNestedMenuItem
          label={
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Sports Wear
            </Typography>
          }
          rightIcon={
            <ArrowForwardIosIcon
              sx={{ width: "10px", height: "10px", mt: "2px " }}
            />
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                American Football Uniform
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Baseball Uniform
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Cricket Uniform
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Ice Hockey Uniform
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Lacrosse Uniform
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Soccer uniform
              </Typography>
            </DropdownMenuItem>,
          ]}
        />,
        <DropdownNestedMenuItem
          label={
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Fashion Jackets
            </Typography>
          }
          rightIcon={
            <ArrowForwardIosIcon
              sx={{ width: "10px", height: "10px", mt: "2px " }}
            />
          }
          menu={[
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Puffer Jackets
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Track Suits
              </Typography>
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Varsity Jacket
              </Typography>
            </DropdownMenuItem>,
          ]}
        />,
      ]}
    />
  );
};

export default MuiNestedMenu;
