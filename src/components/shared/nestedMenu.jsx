import React, { useState } from "react";
import {
  Menu,
  Button,
  MenuItem,
  Typography,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { NestedMenuItem } from "mui-nested-menu";
import images from "../../assets/images";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function NestedMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (e) => setAnchorEl(e.currentTarget);
  const handleMouseLeave = () =>
    setTimeout(() => {
      setAnchorEl(null);
    }, 200);

  const handleClose = () => setAnchorEl(null);
  const isHideOnXSToMD = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  if (isHideOnXSToMD) {
    return null; // Return null to hide the component on xs to md screens
  }
  return (
    <div onMouseLeave={handleMouseLeave}>
      <Button
        onMouseEnter={handleMouseEnter}
        endIcon={<KeyboardArrowDownIcon sx={{ color: "#212a39" }} />}
        disableRipple
        sx={{
          bgcolor: open ? "#dfe4ec" : "white",
          py: 0.5,
          px: 2,
          borderBottom: "6px solid transparent",
          "&:hover": {
            bgcolor: !open ? "#dfe4ec" : "white",
          },
        }}
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
      <Menu
        PaperProps={{
          style: {
            color: "#212a39",
            bgcolor: "white",
            borderRadius: "3px",
            width: "230px",
            paddingX: "10px",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {/* Casual Wear Menu */}
        <NestedMenuItem
          rightIcon={
            <ArrowForwardIosIcon
              sx={{ width: "10px", height: "10px", mt: "2px " }}
            />
          }
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
          parentMenuOpen={open}
        >
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Casual Shirts
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Track Suits
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Hoodies
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Sweat Shirts
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              T-Shirts
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Polo Shirts
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Shorts
            </Typography>
          </MenuItem>
        </NestedMenuItem>
        {/* Sports Wear Menu */}
        <NestedMenuItem
          rightIcon={
            <ArrowForwardIosIcon
              sx={{ width: "10px", height: "10px", mt: "2px " }}
            />
          }
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
          parentMenuOpen={open}
        >
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              American Football Uniform
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Baseball Uniform
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Basketball Uniform
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Cricket Uniform
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Ice Hockey Uniform
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Lacrosse Uniform
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Soccer uniform
            </Typography>
          </MenuItem>
        </NestedMenuItem>
        {/* Fashion Jacket Menu */}
        <NestedMenuItem
          rightIcon={
            <ArrowForwardIosIcon
              sx={{ width: "10px", height: "10px", mt: "2px " }}
            />
          }
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
          parentMenuOpen={open}
        >
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Puffer Jackets
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Varsity Jacket
            </Typography>
          </MenuItem>
        </NestedMenuItem>
      </Menu>
    </div>
  );
}

export default NestedMenu;
